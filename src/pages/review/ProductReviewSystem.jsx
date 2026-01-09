// ProductReviewSystem.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

// Review Form Component
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
  const [message, setMessage] = useState({ text: "", type: "" });

  useEffect(() => {
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
    setMessage({ text: "", type: "" });

    if (!formData.comment.trim()) {
      setMessage({ text: "Please enter a comment", type: "error" });
      return;
    }

    if (!formData.user_name.trim()) {
      setMessage({ text: "Please enter your name", type: "error" });
      return;
    }

    if (requireRating && !isReply && !isEdit && !formData.rating) {
      setMessage({ text: "Please select a rating", type: "error" });
      return;
    }

    localStorage.setItem("review_user_name", formData.user_name.trim());
    if (formData.user_id) {
      localStorage.setItem("review_user_id", formData.user_id);
    }

    setSubmitting(true);

    try {
      const submitData = {
        product_id: formData.product_id,
        comment: formData.comment.trim(),
        user_name: formData.user_name.trim() || "Guest User",
        user_id: formData.user_id || null,
      };

      if (!isReply && !isEdit) {
        submitData.rating = formData.rating;
      }

      const response = await axios.post(
        "https://thecaratcasa.com/api/api/reviews",
        submitData
      );

      if (response.data.success) {
        setMessage({ 
          text: isReply ? "Reply submitted successfully!" : "Review submitted successfully!", 
          type: "success" 
        });
        
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

        if (onSubmit) {
          onSubmit(response.data);
        }
      } else {
        setMessage({ 
          text: response.data.message || "Failed to submit review", 
          type: "error" 
        });
      }
    } catch (error) {
      console.error("❌ Error submitting review:", error);
      setMessage({ 
        text: error.response?.data?.message || "Failed to submit review. Please try again.", 
        type: "error" 
      });
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

  const StarRating = ({ rating, onChange }) => (
    <div className="mb-3">
      <label className="form-label">Rating *</label>
      <div className="d-flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => {
              onChange(star);
              setMessage({ text: `Rating ${star} selected`, type: "success" });
            }}
            className={`btn btn-star ${
              star <= rating ? "btn-warning" : "btn-outline-warning"
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

        {message.text && (
          <div className={`alert ${message.type === "success" ? "alert-success" : "alert-danger"} mb-3`}>
            {message.text}
          </div>
        )}

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

        {!isReply && !isEdit && (
          <StarRating
            rating={parseInt(formData.rating)}
            onChange={(rating) =>
              setFormData((prev) => ({ ...prev, rating: rating.toString() }))
            }
          />
        )}

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

// Review Item Component (UPDATED - Reply functionality removed)
const ReviewItem = ({
  review,
  onLikeDislike,
  onShare,
}) => {
  const [userReaction, setUserReaction] = useState(null);
  const [message, setMessage] = useState({ text: "", type: "" });

  const renderStars = (rating) => {
    if (!rating) return null;
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-warning ${index < rating ? 'opacity-100' : 'opacity-30'}`}
      >
        ★
      </span>
    ));
  };

  const handleLikeDislikeClick = async (isLike) => {
    try {
      await onLikeDislike(review.id, isLike);
      setUserReaction(isLike ? 'like' : 'dislike');
      
      setMessage({ 
        text: isLike ? "Liked successfully!" : "Disliked successfully!", 
        type: "success" 
      });
      
      setTimeout(() => setMessage({ text: "", type: "" }), 3000);
    } catch (error) {
      setMessage({ 
        text: "Failed to update reaction", 
        type: "error" 
      });
    }
  };

  const handleQuickShare = (platform) => {
    onShare(review.id, platform);
  };

  const isVerifiedCustomer =
    review.user_id &&
    review.user_id !== null &&
    review.user_id !== undefined &&
    review.user_id !== 'null' &&
    review.user_id !== 'undefined';

  const displayUserName =
    review.user_name &&
    review.user_name.trim() !== '' &&
    review.user_name.toLowerCase() !== 'anonymous'
      ? review.user_name
      : 'Guest User';

  return (
    <div className="review-item card mb-3 border-0 shadow-sm" id={`review-${review.id}`}>
      <div className="card-body">
        {message.text && (
          <div className={`alert ${message.type === "success" ? "alert-success" : "alert-danger"} mb-3 py-2`}>
            <small>{message.text}</small>
          </div>
        )}

        <div className="d-flex justify-content-between align-items-start mb-3">
          <div className="flex-grow-1">
            {review.rating && (
              <div className="d-flex align-items-center mb-2">
                {renderStars(review.rating)}
                <span className="ms-2 text-muted small">
                  ({review.rating}/5)
                </span>
              </div>
            )}

            <div className="d-flex align-items-center mb-2">
              <strong className="text-dark me-2">{displayUserName}</strong>

              {isVerifiedCustomer ? (
                <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25">
                  ✓ Verified Customer
                </span>
              ) : (
                <span className="badge bg-secondary bg-opacity-10 text-secondary border border-secondary border-opacity-25">
                  Guest
                </span>
              )}
            </div>

            <p className="text-dark mb-2">{review.comment}</p>

            <div className="text-muted small">
              {review.created_at
                ? new Date(review.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })
                : 'No date'}
            </div>
          </div>
        </div>

        {/* Actions - Only Like, Dislike and Share (Reply removed) */}
        <div className="d-flex justify-content-start align-items-center mt-3 pt-3 border-top">
          <div className="d-flex align-items-center gap-4 text-muted">
            <div className="d-flex align-items-center gap-3">
              <button
                onClick={() => handleLikeDislikeClick(true)}
                className={`btn btn-sm d-flex align-items-center gap-1 ${
                  userReaction === 'like'
                    ? 'btn-success'
                    : 'btn-outline-success'
                }`}
                title="Like this review"
              >
                <span>👍</span>
                <span className="small">{review.likes_count || 0}</span>
              </button>

              <button
                onClick={() => handleLikeDislikeClick(false)}
                className={`btn btn-sm d-flex align-items-center gap-1 ${
                  userReaction === 'dislike'
                    ? 'btn-danger'
                    : 'btn-outline-danger'
                }`}
                title="Dislike this review"
              >
                <span>👎</span>
                <span className="small">{review.dislikes_count || 0}</span>
              </button>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-outline-primary btn-sm dropdown-toggle d-flex align-items-center gap-1"
                type="button"
                data-bs-toggle="dropdown"
                title="Share this review"
              >
                <span>↗</span>
                <span>Share ({review.shares_count || 0})</span>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleQuickShare('facebook')}
                  >
                    <i className="bi bi-facebook me-2"></i>Facebook
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleQuickShare('twitter')}
                  >
                    <i className="bi bi-twitter me-2"></i>Twitter
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleQuickShare('whatsapp')}
                  >
                    <i className="bi bi-whatsapp me-2"></i>WhatsApp
                  </button>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleQuickShare('copy')}
                  >
                    <i className="bi bi-link-45deg me-2"></i>Copy Link
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Review System Component (UPDATED - Fixed like/dislike functionality)
const ProductReviewSystem = ({ productId, refreshTrigger }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({});
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [stats, setStats] = useState({
    average_rating: 0,
    total_reviews: 0,
    rating_distribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
  });

  const getGuestIdentifier = () => {
    let id = localStorage.getItem('guest_identifier');
    if (!id) {
      id = 'guest_' + Math.random().toString(36).substring(2, 10);
      localStorage.setItem('guest_identifier', id);
    }
    return id;
  };

  // Fetch reviews
  const fetchReviews = async (page = 1) => {
    if (!productId) return;
    
    setLoading(true);
    try {
      const response = await axios.get(
        `https://thecaratcasa.com/api/api/reviews?product_id=${productId}&page=${page}`
      );

      if (response.data.success) {
        setReviews(response.data.data.data || []);
        setPagination({
          current_page: response.data.data.current_page,
          last_page: response.data.data.last_page,
          total: response.data.data.total
        });

        // Calculate stats from reviews data if stats API is not available
        if (response.data.data.data && response.data.data.data.length > 0) {
          calculateStatsFromReviews(response.data.data.data);
        }
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  // Calculate stats from reviews data
  const calculateStatsFromReviews = (reviewsData) => {
    const totalReviews = reviewsData.length;
    const averageRating = reviewsData.reduce((sum, review) => sum + parseFloat(review.rating || 0), 0) / totalReviews;
    
    const ratingDistribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviewsData.forEach(review => {
      const rating = Math.round(parseFloat(review.rating));
      if (rating >= 1 && rating <= 5) {
        ratingDistribution[rating]++;
      }
    });

    setStats({
      average_rating: averageRating || 0,
      total_reviews: totalReviews || 0,
      rating_distribution: ratingDistribution
    });
  };

  // Fetch review stats
  const fetchReviewStats = async () => {
    if (!productId) return;
    
    try {
      const response = await axios.get(
        `https://thecaratcasa.com/api/api/reviews/stats?product_id=${productId}`
      );

      if (response.data.success) {
        setStats(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching review stats, calculating from reviews:', error);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchReviews();
      fetchReviewStats();
    }
  }, [productId, refreshTrigger]);

  // Handle new review submission
  const handleReviewSubmit = (reviewData) => {
    setShowReviewForm(false);
    fetchReviews();
    fetchReviewStats();
  };

  // Handle like/dislike (UPDATED - Fixed count update)
  const handleLikeDislike = async (reviewId, isLike) => {
    const userId = localStorage.getItem('user_id');
    const guestIdentifier = getGuestIdentifier();

    try {
      const response = await axios.post(
        `https://thecaratcasa.com/api/api/reviews/${reviewId}/like`, 
        {
          is_like: isLike,
          user_id: userId || null,
          guest_identifier: userId ? null : guestIdentifier
        }
      );

      if (response.data.success) {
        // Update the specific review with new counts
        setReviews(prevReviews => 
          prevReviews.map(review => {
            if (review.id === reviewId) {
              // Check if the API returns the updated counts
              const updatedLikes = response.data.likes_count !== undefined 
                ? response.data.likes_count 
                : (isLike ? (review.likes_count || 0) + 1 : (review.likes_count || 0));
              
              const updatedDislikes = response.data.dislikes_count !== undefined 
                ? response.data.dislikes_count 
                : (!isLike ? (review.dislikes_count || 0) + 1 : (review.dislikes_count || 0));

              return {
                ...review,
                likes_count: updatedLikes,
                dislikes_count: updatedDislikes
              };
            }
            return review;
          })
        );
      }
    } catch (error) {
      console.error('Error updating reaction:', error);
      // Fallback: Update locally if API fails
      setReviews(prevReviews => 
        prevReviews.map(review => {
          if (review.id === reviewId) {
            if (isLike) {
              return {
                ...review,
                likes_count: (review.likes_count || 0) + 1
              };
            } else {
              return {
                ...review,
                dislikes_count: (review.dislikes_count || 0) + 1
              };
            }
          }
          return review;
        })
      );
    }
  };

  // Handle share
  const handleShare = async (reviewId, platform) => {
    const userId = localStorage.getItem('user_id');
    const guestIdentifier = getGuestIdentifier();

    try {
      const productUrl = window.location.href.split('#')[0];
      const shareUrl = `${productUrl}#review-${reviewId}`;
      const shareText = `Check out this review on the product!`;

      let shareWindowUrl = '';
      let shouldRecordShare = true;

      switch (platform) {
        case 'facebook':
          shareWindowUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
          break;
        case 'twitter':
          shareWindowUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
          break;
        case 'whatsapp':
          shareWindowUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
          break;
        case 'copy':
          navigator.clipboard.writeText(shareUrl);
          alert('Review link copied to clipboard!');
          shouldRecordShare = false;
          break;
        default:
          if (navigator.share) {
            await navigator.share({
              title: 'Product Review',
              text: shareText,
              url: shareUrl,
            });
            shouldRecordShare = false;
          } else {
            navigator.clipboard.writeText(shareUrl);
            alert('Review link copied to clipboard!');
            shouldRecordShare = false;
          }
      }

      if (shareWindowUrl) {
        window.open(shareWindowUrl, '_blank', 'width=600,height=400');
      }

      if (shouldRecordShare) {
        const response = await axios.post(
          `https://thecaratcasa.com/api/api/reviews/${reviewId}/share`, 
          {
            platform,
            user_id: userId || null,
            guest_identifier: userId ? null : guestIdentifier
          }
        );

        if (response.data.success) {
          setReviews(prevReviews => 
            prevReviews.map(review => 
              review.id === reviewId 
                ? { 
                    ...review, 
                    shares_count: response.data.shares_count || (review.shares_count || 0) + 1 
                  } 
                : review
            )
          );
        }
      }
    } catch (error) {
      if (error.response?.status === 422) {
        alert('You have already shared this review!');
      } else {
        console.error('Error sharing review:', error);
      }
    }
  };

  // Rating distribution bar
  const RatingBar = ({ rating, count, total }) => {
    const percentage = total > 0 ? (count / total) * 100 : 0;
    
    return (
      <div className="d-flex align-items-center mb-2">
        <span className="small text-muted me-2" style={{ width: '20px' }}>
          {rating}
        </span>
        <div className="progress flex-grow-1" style={{ height: '8px' }}>
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={{ width: `${percentage}%` }}
            aria-valuenow={percentage}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <span className="small text-muted ms-2" style={{ width: '30px' }}>
          {count}
        </span>
      </div>
    );
  };

  return (
    <div className="product-review-system mt-5">
      <div className="row">
        {/* Review Stats Sidebar */}
        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Customer Reviews</h5>
              
              {/* Average Rating */}
              <div className="text-center mb-4">
                <div className="display-4 text-warning fw-bold">
                  {stats.average_rating ? parseFloat(stats.average_rating).toFixed(1) : '0.0'}
                </div>
                <div className="text-muted small">
                  out of 5
                </div>
                <div className="mt-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <span
                      key={index}
                      className={`text-warning ${
                        index < Math.floor(stats.average_rating) 
                          ? 'opacity-100' 
                          : 'opacity-30'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <div className="text-muted small mt-1">
                  Based on {stats.total_reviews || 0} reviews
                </div>
              </div>

              {/* Rating Distribution */}
              <div className="rating-distribution">
                <h6 className="mb-3">Rating Breakdown</h6>
                {[5, 4, 3, 2, 1].map((rating) => (
                  <RatingBar
                    key={rating}
                    rating={rating}
                    count={stats.rating_distribution[rating] || 0}
                    total={stats.total_reviews}
                  />
                ))}
              </div>

              {/* Write Review Button */}
              <button
                onClick={() => setShowReviewForm(!showReviewForm)}
                className="btn btn-primary w-100 mt-3"
              >
                Write a Review
              </button>
            </div>
          </div>
        </div>

        {/* Reviews List */}
        <div className="col-md-8">
          {/* Review Form */}
          {showReviewForm && (
            <div className="mb-4">
              <ReviewForm
                productId={productId}
                onSubmit={handleReviewSubmit}
                onCancel={() => setShowReviewForm(false)}
                requireRating={true}
              />
            </div>
          )}

          {/* Reviews List */}
          <div className="reviews-list">
            {loading ? (
              <div className="text-center py-4">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="mt-2 text-muted">Loading reviews...</div>
              </div>
            ) : reviews.length === 0 ? (
              <div className="text-center py-5">
                <div className="text-muted mb-3">
                  <i className="bi bi-chat-square-text display-4"></i>
                </div>
                <h5>No reviews yet</h5>
                <p className="text-muted">Be the first to share your thoughts about this product!</p>
                <button
                  onClick={() => setShowReviewForm(true)}
                  className="btn btn-primary"
                >
                  Write First Review
                </button>
              </div>
            ) : (
              <>
                {/* Reviews Count */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h5 className="mb-0">
                    Customer Reviews ({stats.total_reviews || 0})
                  </h5>
                  
                  {/* Sort Options */}
                  <div className="dropdown">
                    <button
                      className="btn btn-outline-secondary btn-sm dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      Sort by: Latest
                    </button>
                    <ul className="dropdown-menu">
                      <li><button className="dropdown-item small">Latest</button></li>
                      <li><button className="dropdown-item small">Highest Rated</button></li>
                      <li><button className="dropdown-item small">Lowest Rated</button></li>
                    </ul>
                  </div>
                </div>

                {/* Reviews */}
                {reviews.map((review) => (
                  <ReviewItem
                    key={review.id}
                    review={review}
                    onLikeDislike={handleLikeDislike}
                    onShare={handleShare}
                  />
                ))}

                {/* Pagination */}
                {pagination.last_page > 1 && (
                  <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
                    <button
                      onClick={() => fetchReviews(pagination.current_page - 1)}
                      disabled={pagination.current_page === 1}
                      className="btn btn-outline-primary btn-sm"
                    >
                      Previous
                    </button>
                    
                    <span className="text-muted">
                      Page {pagination.current_page} of {pagination.last_page}
                    </span>
                    
                    <button
                      onClick={() => fetchReviews(pagination.current_page + 1)}
                      disabled={pagination.current_page === pagination.last_page}
                      className="btn btn-outline-primary btn-sm"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReviewSystem;