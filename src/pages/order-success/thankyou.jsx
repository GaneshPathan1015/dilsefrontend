import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosClient from "../../api/axios";
import "./thankyou.css";

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("ThankYou Location State:", location.state);
    
    // Pehle check karen: kya navigate ke through data aaya hai?
    if (location.state?.order) {
      setOrder(location.state.order);
      setLoading(false);
      return;
    }

    // Dusra option: URL se order_id nikal kar API call karen
    const queryParams = new URLSearchParams(window.location.search);
    const orderId = queryParams.get("order_id");
    
    if (orderId) {
      // Order ID se data fetch karen
      axiosClient.get(`/api/orders/${orderId}`)
        .then((res) => {
          setOrder(res.data);
          setLoading(false);
        })
        .catch(error => {
          console.error("Order fetch error:", error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [location.state]);

  const handleViewOrder = () => {
    if (order && order.id) {
      // Order details page par jayenge with actual order ID
      navigate(`/order-details/${order.id}`, { 
        state: { order } 
      });
    } else {
      alert("Order data not available");
    }
  };

  const handleContinueShopping = () => {
    navigate("/diamond");
  };

  if (loading) {
    return (
      <div className="thankyou-container">
        <div className="thankyou-card">
          <p>Loading your order details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="thankyou-container">
      <div className="thankyou-card">
        <div className="thankyou-icon">
          <div className="checkmark">&#10003;</div>
          <div className="particles"></div>
        </div>
        
        {order ? (
          <>
            <h2 className="thankyou_h2">Thank you for your order!</h2>
            <p className="thankyou_p">
              Order ID: <strong>{order.order_id}</strong>
            </p>
            <p className="thankyou_p">
              Total Amount: <strong>${order.total_price}</strong>
            </p>
            <p className="thankyou_p">
              Status: <strong className="status-green">{order.order_status}</strong>
            </p>
            <div className="thankyou-buttons">
              <button
                className="thankyou-btn-outline"
                onClick={handleViewOrder}
              >
                VIEW ORDER DETAILS
              </button>
              <button
                className="thankyou-btn-filled"
                onClick={handleContinueShopping}
              >
                CONTINUE SHOPPING
              </button>
            </div>
          </>
        ) : (
          <div>
            <h2>Thank You for Your Order!</h2>
            <p>Your order has been successfully placed.</p>
            <p>You will receive confirmation email shortly.</p>
            <button
              className="thankyou-btn-filled"
              onClick={handleContinueShopping}
            >
              CONTINUE SHOPPING
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThankYou;