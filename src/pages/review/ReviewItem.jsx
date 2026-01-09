import React, { useState } from 'react';
import ReviewForm from './ReviewForm';
import ReplyList from './ReplyList';

const ReviewItem = ({
    review,
    onLikeDislike,
    onShare,
    showEditDelete = true,
    onEdit,
    onDelete,
    onUpdateReview,
    editingReview
}) => {
    const [showReplies, setShowReplies] = useState(false);
    const [showReplyForm, setShowReplyForm] = useState(false);
    const [userReaction, setUserReaction] = useState(null);

    const isEditing = editingReview === review.id;

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
        await onLikeDislike(review.id, isLike);
        setUserReaction(isLike ? 'like' : 'dislike');
    };

    const handleShareClick = (platform = 'social') => {
        onShare(review.id, platform);
    };

    const handleQuickShare = (platform) => {
        handleShareClick(platform);
    };

    // ✅ Improved verified user check
    const isVerifiedCustomer =
        review.user_id &&
        review.user_id !== null &&
        review.user_id !== undefined &&
        review.user_id !== 'null' &&
        review.user_id !== 'undefined';

    // ✅ Valid ID check
    const hasValidId = review && review.id && review.id !== 'undefined';

    // ✅ Safe user name
    const displayUserName =
        review.user_name &&
        review.user_name.trim() !== '' &&
        review.user_name.toLowerCase() !== 'anonymous'
            ? review.user_name
            : 'Guest User';

    return (
        <div className="review-item card mb-3 border-0 shadow-sm" id={`review-${review.id}`}>
            <div className="card-body">
                {/* Review Header */}
                <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="flex-grow-1">
                        {/* Star Rating */}
                        {review.rating && (
                            <div className="d-flex align-items-center mb-2">
                                {renderStars(review.rating)}
                                <span className="ms-2 text-muted small">
                                    ({review.rating}/5)
                                </span>
                            </div>
                        )}

                        {/* User Info */}
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

                        {/* Comment */}
                        <p className="text-dark mb-2">{review.comment}</p>

                        {/* Date */}
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

                {/* Edit Form */}
                {isEditing && (
                    <ReviewForm
                        review={review}
                        onSubmit={(data) => onUpdateReview(review.id, data)}
                        onCancel={() => onEdit(null)}
                        isEdit={true}
                    />
                )}

                {/* Review Stats and Actions */}
                <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
                    <div className="d-flex align-items-center gap-4 text-muted">
                        {/* Likes/Dislikes */}
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

                        {/* Share Button */}
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

                        {/* Replies Toggle */}
                        {hasValidId && review.replies_count > 0 && (
                            <button
                                onClick={() => setShowReplies(!showReplies)}
                                className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1"
                            >
                                <span>💬</span>
                                <span>
                                    {showReplies ? 'Hide' : 'Show'} Replies (
                                    {review.replies_count})
                                </span>
                            </button>
                        )}
                    </div>

                    {/* Reply Button */}
                    {hasValidId && (
                        <button
                            onClick={() => setShowReplyForm(!showReplyForm)}
                            className="btn btn-outline-dark btn-sm"
                        >
                            {showReplyForm ? 'Cancel Reply' : 'Reply'}
                        </button>
                    )}
                </div>

                {/* Reply Form */}
                {showReplyForm && hasValidId && (
                    <div className="mt-3 ps-3 border-start border-2 border-primary">
                        <ReviewForm
                            parentId={review.id}
                            productId={review.product_id}
                            onSubmit={() => {
                                setShowReplyForm(false);
                                setShowReplies(true);
                            }}
                            onCancel={() => setShowReplyForm(false)}
                            isReply={true}
                        />
                    </div>
                )}

                {/* Replies List */}
                {showReplies && hasValidId && (
                    <div className="mt-3">
                        <ReplyList
                            reviewId={review.id}
                            onLikeDislike={onLikeDislike}
                            onShare={onShare}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReviewItem;
