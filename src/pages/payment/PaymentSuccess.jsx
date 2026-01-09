import { useEffect, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axiosClient from "../../api/axios";
import { useCart } from "../../cart/CartContext";

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const effectRan = useRef(false);

  const { clearCart } = useCart();
  // const token = searchParams.get("token");
  const paypalToken = searchParams.get("token"); // PayPal sends this
  const cashfreeOrderId = searchParams.get("cf_order_id");

  useEffect(() => {
    if (effectRan.current) return; // Prevent double-fire in StrictMode

    if (paypalToken || cashfreeOrderId) {
      effectRan.current = true;

      // 1. Retrieve the data we saved before redirecting
      // const savedOrder = localStorage.getItem("pendingPaypalOrder");
      const savedOrder = localStorage.getItem("pendingOrderData") || localStorage.getItem("pendingPaypalOrder");

      if (!savedOrder) {
        alert("Session expired. Please try again.");
        navigate("/checkout");
        return;
      }

      const orderData = JSON.parse(savedOrder);

      let apiEndpoint = "";
      let payload = { ...orderData };

      if (paypalToken) {
        // --- PAYPAL ---
        apiEndpoint = "/api/paypal/capture";
        payload.token = paypalToken;
      } else if (cashfreeOrderId) {
        // --- CASHFREE ---
        apiEndpoint = "/api/cashfree/verify";
        payload.order_id = cashfreeOrderId;
      }
      // 5. Call the Backend
      axiosClient
        .post(apiEndpoint, payload)
        .then((res) => {
          if (res.data.status === "success") {
            // Success! Clear everything.
            clearCart();
            localStorage.removeItem("pendingOrderData");
            localStorage.removeItem("pendingPaypalOrder");

            // Redirect to Thank You page
            navigate("/thankyou");
          } else {
            alert("Payment failed: " + (res.data.message || "Unknown error"));
            navigate("/checkout");
          }
        })
        .catch((err) => {
          console.error("Payment Verification Error:", err);
          alert("Error verifying payment. Please contact support.");
          navigate("/checkout");
        });
    } else {
      // If no Token AND no Cashfree ID, go home
      navigate("/");
    }
  }, [paypalToken, cashfreeOrderId, navigate, clearCart]);

  //     // 2. Call Laravel to Capture Payment & Save Order
  //     axiosClient.post("/api/paypal/capture", {
  //       token,
  //       ...orderData // Spreading items, address, amount into the request
  //     })
  //     .then((res) => {
  //       if (res.data.status === "success") {
  //         // Cleanup and Redirect
  //         clearCart();
  //         localStorage.removeItem("pendingPaypalOrder");
  //         // alert("Order Placed Successfully!");
  //         navigate("/thankyou");
  //       } else {
  //         alert("Payment not completed.");
  //         navigate("/checkout");
  //       }
  //     })
  //     .catch((err) => {
  //       console.error("PayPal Capture Error:", err);
  //       alert("Error verifying payment.");
  //       navigate("/checkout");
  //     });
  //   } else {
  //       navigate("/");
  //   }
  // }, [token, navigate]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <div className="spinner-border text-primary" role="status"></div>
        <h3 className="mt-3">Finalizing your order...</h3>
        <p>Please do not close this window.</p>
      </div>
    </div>
  );
}
