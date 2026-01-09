import { useSearchParams } from "react-router-dom";
import React, { useState } from "react";
import axiosClient from "../../api/axios";

const styles = {
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  modal: {
    backgroundColor: "white",
    borderRadius: "8px",
    maxWidth: "600px",
    width: "100%",
    position: "relative",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  header: {
    padding: "40px 30px 30px",
    borderBottom: "1px solid #e0e0e0",
  },
  title: {
    fontSize: "32px",
    fontWeight: "300",
    letterSpacing: "2px",
    color: "#2c3e50",
    margin: 0,
    textAlign: "center",
  },
  formBody: {
    padding: "30px",
  },
  label: {
    fontSize: "13px",
    fontWeight: "400",
    color: "#666",
    marginBottom: "8px",
    display: "block",
  },
  required: {
    color: "#dc3545",
  },
  input: {
    width: "100%",
    padding: "12px 15px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "15px",
    marginBottom: "10px",
  },
  textarea: {
    width: "100%",
    padding: "12px 15px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "15px",
    minHeight: "120px",
    resize: "vertical",
    marginBottom: "10px",
  },
  error: {
    color: "#dc3545",
    fontSize: "13px",
    marginBottom: "10px",
  },
  disclaimer: {
    fontSize: "13px",
    color: "#888",
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: "25px",
  },
  buttonGroup: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
  },
  sendButton: {
    backgroundColor: "#2c3e50",
    color: "white",
    border: "none",
    padding: "12px 40px",
    fontSize: "14px",
    fontWeight: "600",
    letterSpacing: "1px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

const EnquiryForm = () => {
  
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("productId") || "";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
    product: productId || "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email address.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.comments.trim())
      newErrors.comments = "Please enter your comments.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await axiosClient.post("/api/enquiries", formData);
      alert("Enquiry sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        comments: "",
        product: productId || "",
      });
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.header}>
          <h2 style={styles.title}>SEND AN ENQUIRY</h2>
        </div>

        <div style={styles.formBody}>
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label style={styles.label}>
                YOUR NAME <span style={styles.required}>*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                style={styles.input}
              />
              {errors.name && <div style={styles.error}>{errors.name}</div>}
            </div>

            <div className="mb-3">
              <label style={styles.label}>
                YOUR EMAIL <span style={styles.required}>*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email address"
                style={styles.input}
              />
              {errors.email && <div style={styles.error}>{errors.email}</div>}
            </div>

            <div className="mb-3">
              <label style={styles.label}>
                PHONE NO. <span style={styles.required}>*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                style={styles.input}
              />
              {errors.phone && <div style={styles.error}>{errors.phone}</div>}
            </div>

            <div className="mb-3">
              <label style={styles.label}>
                QUESTION / COMMENTS <span style={styles.required}>*</span>
              </label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="QUESTION/COMMENTS"
                style={styles.textarea}
              />
              {errors.comments && (
                <div style={styles.error}>{errors.comments}</div>
              )}
            </div>

            <p style={styles.disclaimer}>
              This information will not be used for any purpose other than the
              sending of this email.
            </p>

            <div style={styles.buttonGroup}>
              <button type="submit" style={styles.sendButton}>
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
