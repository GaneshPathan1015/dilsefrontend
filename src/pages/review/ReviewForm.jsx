import React, { useState, useEffect } from "react";
import axios from "axios";

const ReviewForm = ({
  onSubmit,
  onCancel,
  review = null,
  parentId = null,
  productId = null,
  isEdit = false,
  isReply = false,
  requireRating = false,
}) => {
  const [formData, setFormData] = useState({
    rating: "",
    comment: "",
    user_name: "",
    user_id: null,
    product_id: productId,
    parent_id: parentId,
  });

  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    // 🟢 Load saved user info from localStorage (if available)
    const savedUserName = localStorage.getItem("review_user_name");
    const savedUserId = localStorage.getItem("review_user_id");

    if (review) {
      setFormData({
        rating: review.rating || "",
        comment: review.comment || "",
        user_name: review.user_name || savedUserName || "",
        user_id: review.user_id || savedUserId || null,
        product_id: review.product_id,
        parent_id: review.parent_id,
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        user_name: savedUserName || "",
        user_id: savedUserId || null,
        product_id: productId,
        parent_id: parentId,
      }));
    }
  }, [review, productId, parentId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🟥 Validation
    if (!formData.comment.trim()) {
      alert("Please enter a comment");
      return;
    }

    if (!formData.user_name.trim()) {
      alert("Please enter your name");
      return;
    }

    if (requireRating && !isReply && !isEdit && !formData.rating) {
      alert("Please select a rating");
      return;
    }

    // 🟩 Save user name and ID to localStorage
    localStorage.setItem("review_user_name", formData.user_name.trim());
    if (formData.user_id) {
      localStorage.setItem("review_user_id", formData.user_id);
    }

    setSubmitting(true);

    try {
      // 🟢 Prepare Data for Backend
      const submitData = {
        product_id: formData.product_id,
        comment: formData.comment.trim(),
        user_name: formData.user_name.trim() || "Guest User",
        user_id: formData.user_id || null,
      };

      // Include rating only if not a reply
      if (!isReply) {
        submitData.rating = formData.rating;
      }

      console.log("📤 Submitting review data:", submitData);

      // 🟢 Send to Backend API
      const response = await axios.post(
        "https://dilsejewels.com/api/api/reviews",
        submitData
      );

      if (response.data.success) {
        // Reset form after submission
        if (!isEdit) {
          setFormData({
            rating: "",
            comment: "",
            user_name: formData.user_name,
            user_id: formData.user_id,
            product_id: productId,
            parent_id: parentId,
          });
        }

        // Callback to parent
        if (onSubmit) {
          onSubmit(response.data);
        }
      } else {
        alert(
          "Failed to submit review: " +
          (response.data.message || "Unknown error")
        );
      }
    } catch (error) {
      console.error("❌ Error submitting review:", error);
      if (error.response?.data?.message) {
        alert("Failed to submit review: " + error.response.data.message);
      } else {
        alert("Failed to submit review. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ⭐ Star Rating Component
  const StarRating = ({ rating, onChange }) => (
    <div className="mb-3">
      <label className="form-label">Rating *</label>
      <div className="d-flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            className={`btn btn-star ${star <= rating ? "btn-warning" : "btn-outline-warning"
              } p-0`}
            style={{ width: "40px", height: "40px", fontSize: "1.5rem" }}
            disabled={submitting}
          >
            ★
          </button>
        ))}
      </div>
      {rating > 0 && (
        <div className="text-muted small mt-1">Selected: {rating}/5</div>
      )}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="review-form card border-0 bg-light">
      <div className="card-body">
        <h5 className="card-title mb-3">
          {isEdit ? "Edit Review" : isReply ? "Write a Reply" : "Write a Review"}
        </h5>

        {/* User Name */}
        <div className="mb-3">
          <label htmlFor="user_name" className="form-label">
            Your Name *
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your name"
            required
            disabled={submitting}
          />
        </div>

        {/* Star Rating - Only for main reviews */}
        {!isReply && (
          <StarRating
            rating={parseInt(formData.rating)}
            onChange={(rating) =>
              setFormData((prev) => ({ ...prev, rating: rating.toString() }))
            }
          />
        )}

        {/* Comment */}
        <div className="mb-3">
          <label htmlFor="comment" className="form-label">
            {isReply ? "Your Reply *" : "Your Review *"}
          </label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows="4"
            className="form-control"
            placeholder={
              isReply
                ? "Write your reply..."
                : "Share your thoughts about this product..."
            }
            required
            disabled={submitting}
          />
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-end gap-2">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="btn btn-outline-secondary"
              disabled={submitting}
            >
              Cancel
            </button>
          )}
          <button type="submit" className="btn btn-primary" disabled={submitting}>
            {submitting
              ? "Submitting..."
              : isEdit
                ? "Update"
                : isReply
                  ? "Post Reply"
                  : "Submit Review"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ReviewForm;
