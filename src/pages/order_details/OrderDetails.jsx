import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axiosClient from "../../api/axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./OrderDetails.css";

const OrderDetails = () => {
  const { orderId } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [address, setAddress] = useState({});

  useEffect(() => {
    console.log("OrderDetails - Order ID:", orderId);
    console.log("OrderDetails - Location State:", state);

    // Pehle check karen: kya state se order data aaya hai?
    if (state?.order) {
      const orderData = state.order;
      setOrder(orderData);
      parseOrderData(orderData);
      setLoading(false);
      return;
    }

    // Agar state mein data nahi hai, to API se fetch karen
    if (orderId) {
      axiosClient.get(`/api/orders/${orderId}`)
        .then((res) => {
          const orderData = res.data;
          setOrder(orderData);
          parseOrderData(orderData);
          setLoading(false);
        })
        .catch(error => {
          console.error("Order fetch error:", error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [orderId, state]);

  // Order data ko parse karna
  const parseOrderData = (orderData) => {
    try {
      // Item details parse karen
      const itemDetails = typeof orderData.item_details === 'string' 
        ? JSON.parse(orderData.item_details) 
        : orderData.item_details;
      
      // Items array nikalen
      const itemsArray = itemDetails.items || [];
      setItems(itemsArray);

      // Address parse karen
      const addressObj = typeof orderData.address === 'string' 
        ? JSON.parse(orderData.address) 
        : orderData.address;
      setAddress(addressObj);

    } catch (error) {
      console.error("Data parse error:", error);
      setItems([]);
      setAddress({});
    }
  };

  // Invoice download karna
  const generateInvoicePDF = async () => {
    const input = document.getElementById("invoice-content");
    if (!input) return;
    
    try {
      const canvas = await html2canvas(input, {
        scale: 2,
        useCORS: true,
      });
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`invoice_${order.order_id}.pdf`);
    } catch (error) {
      console.error("PDF error:", error);
      alert("Invoice download failed");
    }
  };

  if (loading) {
    return (
      <div className="order-container">
        <div className="loading-spinner">Loading order details...</div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="order-container">
        <div className="error-message">
          <h2>Order Not Found</h2>
          <p>The order you are looking for does not exist.</p>
          <button onClick={() => navigate('/orders')} className="back-btn">
            Back to Orders
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="order-page-grid">
      {/* Left Side - Main Content */}
      <div className="order-main-box">
        {/* Order Header */}
        <div className="order-header">
          <h1>Order Details</h1>
          <div className="order-meta">
            <p><strong>Order ID:</strong> {order.order_id}</p>
            <p><strong>Order Date:</strong> {new Date(order.created_at).toLocaleDateString()}</p>
            <p><strong>Status:</strong> <span className={`status-badge ${order.order_status}`}>{order.order_status}</span></p>
          </div>
        </div>

        {/* Products Section */}
        <div className="order-products-section">
          <h3>Products ({items.length})</h3>
          
          {items.length > 0 ? (
            items.map((item, index) => (
              <div className="product-card" key={index}>
                <div className="product-image">
                  <img 
                    src={item.images?.[0] || "https://i.imgur.com/6LZxZZL.png"} 
                    alt={item.name} 
                    onError={(e) => {
                      e.target.src = "https://i.imgur.com/6LZxZZL.png";
                    }}
                  />
                </div>
                <div className="product-details">
                  <h4>{item.name || `Product ${index + 1}`}</h4>
                  <p className="product-sku">SKU: {item.sku || 'N/A'}</p>
                  <p className="product-type">Type: {item.productType || 'jewelry'}</p>
                  <p className="product-quantity">Quantity: {item.itemQuantity || 1}</p>
                  <p className="product-price">Price: ${item.price || 0}</p>
                </div>
                <div className="product-status">
                  <span className={`status-dot ${order.order_status === 'cancelled' ? 'red' : 'green'}`}></span>
                  {order.order_status}
                </div>
              </div>
            ))
          ) : (
            <p>No items found in this order.</p>
          )}
        </div>

        {/* Order Timeline */}
        <div className="order-timeline-section">
          <h3>Order Timeline</h3>
          <div className="timeline">
            <div className="timeline-item active">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <strong>Order Confirmed</strong>
                <p>{new Date(order.created_at).toLocaleString()}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <strong>Processing</strong>
                <p>Your order is being processed</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <strong>Shipped</strong>
                <p>Will update when shipped</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <strong>Delivered</strong>
                <p>Will update when delivered</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Sidebar */}
      <div className="order-side-box">
        {/* Shipping Address */}
        <div className="shipping-card">
          <h3>Shipping Address</h3>
          <div className="address-details">
            <p><strong>{order.user_name}</strong></p>
            <p>{address.apartment}</p>
            <p>{address.street}</p>
            <p>{address.city}, {address.zip}</p>
            <p>{address.country}</p>
            <p className="contact-info">
              <strong>Phone:</strong> {order.contact_number}
            </p>
          </div>
        </div>

        {/* Price Summary - Invoice ke liye */}
        <div className="price-card" id="invoice-content">
          <h3>Order Summary</h3>
          <div className="price-breakdown">
            <div className="price-row">
              <span>Subtotal ({order.total_quantity || items.length} items):</span>
              <span>${order.total_price}</span>
            </div>
            
            {order.coupon_discount > 0 && (
              <div className="price-row discount">
                <span>Coupon Discount ({order.coupon_code}):</span>
                <span>-${order.coupon_discount}</span>
              </div>
            )}
            
            <div className="price-row">
              <span>Shipping:</span>
              <span>$0.00</span>
            </div>
            
            <div className="price-row">
              <span>Tax:</span>
              <span>$0.00</span>
            </div>
            
            <div className="price-row total">
              <span><strong>Total Amount:</strong></span>
              <span><strong>${order.total_price}</strong></span>
            </div>
          </div>

          <div className="payment-info">
            <p><strong>Payment Method:</strong> {order.payment_mode}</p>
            <p><strong>Payment Status:</strong> {order.payment_status}</p>
          </div>

          {/* Invoice Download Button */}
          <button onClick={generateInvoicePDF} className="invoice-btn">
            📄 Download Invoice
          </button>
        </div>

        {/* Support Section */}
        <div className="support-card">
          <h3>Need Help?</h3>
          <p>If you have any questions about your order, contact our support team.</p>
          <div className="support-actions">
            <button className="support-btn">💬 Chat with Support</button>
            <button className="support-btn">📞 Call Support</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;