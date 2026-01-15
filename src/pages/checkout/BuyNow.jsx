import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../api/axios";
import { loadScript } from "../../utils/loadScript";
import { useCart } from "../../cart/CartContext";

export default function BuyNow({
  cartItems,
  totalPrice,
  user,
  formData,
  validate,
  sameAsDelivery,
  discountResponse,
}) {
  const [loading, setLoading] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [methodError, setMethodError] = useState("");
  const navigate = useNavigate();
  const { clearCart } = useCart();
  // Ensure we fallback to 0 if variables are undefined
  const rawAmount = discountResponse
    ? discountResponse.final_amount
    : totalPrice;

  // CRITICAL FOR CASHFREE: Ensure this is a number, not a string
  const numericAmount = parseFloat(rawAmount);
  const couponCode = discountResponse ? discountResponse.coupon_code : null;
  const discountAmount = discountResponse ? discountResponse.discount : 0;

  const scrollToError = () => {
    setTimeout(() => {
      const firstErrorElement = document.querySelector(".is-invalid");
      if (firstErrorElement) {
        firstErrorElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        firstErrorElement.focus();
      }
    }, 100);
  };

  // Helper to handle selection and clear error immediately
  const handleSelectMethod = (method) => {
    setSelectedMethod(method);
    setMethodError(""); // Clear error when user selects an option
  };

  // --- 1. RAZORPAY LOGIC ---
  const handleRazorpay = async () => {
    // A. Load the SDK
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Check your internet.");
      return;
    }

    try {
      // B. Create Order on Backend
      const { data } = await axiosClient.post("/api/razorpay/create", {
        total_amount: totalPrice,
      });

      // C. Open the Options Modal
      const options = {
        key: data.key,
        amount: data.amount,
        currency: "INR",
        name: "Diamond Store",
        description: "Payment for your order",
        order_id: data.order_id,
        handler: async function (response) {
          // D. Verify & Save Order
          try {
            const verifyRes = await axiosClient.post(
              "/api/razorpay/verify",
              {
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                // Send all data needed to save the order
                items: cartItems,
                shipping_address: formData,
                billing_address: sameAsDelivery
                  ? formData
                  : {
                    /* map your billing fields here */
                  },
                total_amount: totalPrice,
                coupon_code: couponCode, // Save the code
                discount: discountAmount,
              },
              {
                withCredentials: true,
              }
            );

            if (verifyRes.data.status === "success") {
              clearCart();
              navigate("/thankyou"); // Redirect to success page
            }
          } catch (error) {
            alert("Payment verified but order save failed. Contact support.");
          }
        },
        prefill: {
          name: `${formData.first_name} ${formData.last_name}`,
          email: user?.email,
          contact: formData.phone,
        },
        theme: { color: "#3399cc" },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      console.error(err);
      alert("Could not initiate Razorpay transaction please try again later");
    }
  };

  // --- 2. PAYPAL LOGIC ---
  const handlePaypal = async () => {
    try {
      // A. Save Data to LocalStorage (Because we are leaving the page)
      const pendingOrder = {
        items: cartItems,
        shipping_address: formData,
        billing_address: sameAsDelivery
          ? formData
          : {
            /* map billing fields */
          },
        total_amount: totalPrice,
        coupon_code: couponCode, // Save the code
        discount: discountAmount,
      };
      localStorage.setItem("pendingPaypalOrder", JSON.stringify(pendingOrder));

      // B. Get Approval URL from Laravel
      const { data } = await axiosClient.post("/api/paypal/create", {
        total_amount: totalPrice,
      });

      // C. Redirect User
      window.location.href = data.approval_url;
    } catch (err) {
      console.error(err);
      alert("Could not initiate PayPal transaction please try again later");
    }
  };

  // --- 3. CASHFREE LOGIC ---
  const handleCashfree = async () => {
    // 1. Load SDK
    const res = await loadScript("https://sdk.cashfree.com/js/v3/cashfree.js");
    if (!res) {
      alert("Cashfree SDK failed to load");
      return;
    }

    const cashfree = new window.Cashfree({
      mode: "sandbox",
    });

    try {
      // 2. Save Order Data (Use numericAmount)
      const pendingOrder = {
        items: cartItems,
        shipping_address: formData,
        billing_address: sameAsDelivery
          ? formData
          : {
            /* map billing */
          },
        total_amount: numericAmount,
        coupon_code: couponCode,
        discount: discountAmount,
      };

      // Use "pendingOrderData" (Standardize this key if possible)
      localStorage.setItem("pendingOrderData", JSON.stringify(pendingOrder));

      // 3. Create Session (Send NUMERIC amount)
      const { data } = await axiosClient.post("/api/cashfree/create", {
        total_amount: numericAmount,
      });

      // 4. Redirect
      // window.location.origin gives you "http://localhost:5173" OR "https://your-domain.com"
      const currentDomain = window.location.origin;

      cashfree.checkout({
        paymentSessionId: data.payment_session_id,
        returnUrl: `${currentDomain}/payment/success?cf_order_id=${data.order_id}`,
      });
    } catch (error) {
      console.error(error);
      alert("Failed to start Cashfree payment please try again later");
    }
  };

  const handleCod = async () => {
    try {
      // 1. Call Backend Directly
      const res = await axiosClient.post("/api/cod/create", {
        items: cartItems,
        shipping_address: formData,
        billing_address: sameAsDelivery ? formData : { ...formData }, // Replace with actual billing if different
        total_amount: numericAmount,
        coupon_code: couponCode,
        discount: discountAmount, // Ensure backend matches this key ($request->discount)
      });

      // 2. Handle Success
      if (res.data.status === "success") {
        // clearCart();
        navigate("/thankyou");
      } else {
        alert("Failed to place order: " + res.data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong placing the COD order.");
    }
  };

  // --- 3. MASTER CLICK HANDLER ---
  const handlePayNow = async () => {
    const isValid = validate();
    if (!isValid) {
      scrollToError();
      return;
    }

    // setLoading(true);
    setMethodError("");

    // Checks
    if (!selectedMethod) {
      setMethodError("Please select a payment method.");
      return;
    }

    if (!user) {
      alert("Please login first to place an order.");
      localStorage.setItem(
        "pendingAddress",
        JSON.stringify({ formData, selectedMethod, cartPayload: cartItems })
      );
      navigate("/signin", { state: { from: "/checkout" } });
      return;
    }
    // Form Validation (Scrolls to error if fails)
    // if (!validate()) return;

    setLoading(true);

    if (selectedMethod === "razorpay") {
      await handleRazorpay();
    } else if (selectedMethod === "paypal") {
      await handlePaypal();
    } else if (selectedMethod === "cashfree") {
      await handleCashfree();
    } else if (selectedMethod === "cod") {
      // Handle COD logic here...
      // alert("COD Logic needed");
      await handleCod();
    }

    setLoading(false);
  };

  return (
    <div className="mt-4 mb-2">
      <div className="d-flex flex-column gap-2">
        {/* Update buttons to clear error on click */}

        <button
          className={`btn w-100 ${selectedMethod === "cashfree" ? "btn-primary" : "btn-outline-dark"
            }`}
          onClick={() => handleSelectMethod("cashfree")}
        >
          Cashfree
        </button>
        <button
          className={`btn w-100 ${selectedMethod === "razorpay" ? "btn-dark" : "btn-outline-dark"
            }`}
          onClick={() => handleSelectMethod("razorpay")}
        >
          Razorpay
        </button>

        <button
          className={`btn w-100 ${selectedMethod === "paypal" ? "btn-primary" : "btn-outline-primary"
            }`}
          onClick={() => handleSelectMethod("paypal")}
        >
          PayPal
        </button>

        <button
          className={`btn w-100 ${selectedMethod === "cod" ? "btn-success" : "btn-outline-success"
            }`}
          onClick={() => handleSelectMethod("cod")}
        >
          Cash on Delivery
        </button>
      </div>

      {/* 3. Render the Error Message here */}
      {methodError && (
        <div className="text-danger text-center mt-3 fw-bold animate__animated animate__shakeX">
          <i className="bi bi-exclamation-circle me-2"></i>
          {methodError}
        </div>
      )}

      <button
        className="btn btn-dark w-100 mt-4"
        onClick={handlePayNow}
        disabled={loading}
      >
        {loading
          ? "Processing..."
          : selectedMethod === "cod"
            ? "Place Order"
            : "Pay Now"}
      </button>
    </div>
  );
}
