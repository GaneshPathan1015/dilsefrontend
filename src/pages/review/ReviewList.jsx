import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReplyList = ({ reviewId, onLikeDislike, onShare }) => {
    const [replies, setReplies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({});

    // ✅ Utility: Get or generate guest identifier
    const getGuestIdentifier = () => {
        let id = localStorage.getItem('guest_identifier');
        if (!id) {
            id = 'guest_' + Math.random().toString(36).substring(2, 10);
            localStorage.setItem('guest_identifier', id);
        }
        return id;
    };

    useEffect(() => {
        if (reviewId) {
            fetchReplies();
        }
    }, [reviewId]);

    // ✅ Fetch replies list
    const fetchReplies = async (page = 1) => {
        setLoading(true);
        try {
            const response = await axios.get(
                `https://thecaratcasa.com/api/api/reviews/${reviewId}/replies?page=${page}`
            );

            if (response.data.success) {
                setReplies(response.data.data.data);
                setPagination({
                    current_page: response.data.data.current_page,
                    last_page: response.data.data.last_page,
                    total: response.data.data.total
                });
            }
        } catch (error) {
            console.error('Error fetching replies:', error);
        } finally {
            setLoading(false);
        }
    };

    // ✅ Handle Like/Dislike with user info
    const handleLikeDislike = async (replyId, isLike) => {
        const userId = localStorage.getItem('user_id');
        const guestIdentifier = getGuestIdentifier();

        try {
            const response = await axios.post(
                `https://thecaratcasa.com/api/api/reviews/${replyId}/like`, 
                {
                    is_like: isLike,
                    user_id: userId || null,
                    guest_identifier: userId ? null : guestIdentifier
                }
            );

            if (response.data.success) {
                // Update the specific reply counts
                setReplies(prevReplies => 
                    prevReplies.map(reply => 
                        reply.id === replyId 
                            ? { 
                                ...reply, 
                                likes_count: response.data.likes_count,
                                dislikes_count: response.data.dislikes_count
                              } 
                            : reply
                    )
                );
            }
        } catch (error) {
            console.error('Error updating reaction:', error);
        }
    };

    // ✅ Handle Share with user info
    const handleShare = async (replyId, platform) => {
        const userId = localStorage.getItem('user_id');
        const guestIdentifier = getGuestIdentifier();

        try {
            // Build shareable URL
            const productUrl = window.location.href.split('#')[0];
            const shareUrl = `${productUrl}#review-${replyId}`;
            const shareText = `Check out this reply on the product!`;

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
                    alert('Reply link copied to clipboard!');
                    shouldRecordShare = false;
                    break;
                default:
                    if (navigator.share) {
                        await navigator.share({
                            title: 'Product Review Reply',
                            text: shareText,
                            url: shareUrl,
                        });
                        shouldRecordShare = false;
                    } else {
                        navigator.clipboard.writeText(shareUrl);
                        alert('Reply link copied to clipboard!');
                        shouldRecordShare = false;
                    }
            }

            if (shareWindowUrl) {
                window.open(shareWindowUrl, '_blank', 'width=600,height=400');
            }

            // ✅ Record the share in database
            if (shouldRecordShare) {
                const response = await axios.post(
                    `https://thecaratcasa.com/api/api/reviews/${replyId}/share`, 
                    {
                        platform,
                        user_id: userId || null,
                        guest_identifier: userId ? null : guestIdentifier
                    }
                );

                if (response.data.success) {
                    setReplies(prevReplies => 
                        prevReplies.map(reply => 
                            reply.id === replyId 
                                ? { ...reply, shares_count: response.data.shares_count } 
                                : reply
                        )
                    );
                }
            }
        } catch (error) {
            if (error.response?.status === 422) {
                alert('You have already shared this reply!');
            } else {
                console.error('Error sharing reply:', error);
            }
        }
    };

    // ✅ Reply Item component
    const ReplyItem = ({ reply }) => {
        const [userReaction, setUserReaction] = useState(null);
        const isVerifiedUser = reply.user_id !== null && reply.user_id !== undefined;

        const handleLike = async (isLike) => {
            await handleLikeDislike(reply.id, isLike);
            setUserReaction(isLike ? 'like' : 'dislike');
        };

        const handleQuickShare = (platform) => {
            handleShare(reply.id, platform);
        };

        return (
            <div className="reply-item card mb-2 border-0 bg-light">
                <div className="card-body">
                    {/* Header */}
                    <div className="d-flex justify-content-between align-items-start mb-2">
                        <div className="flex-grow-1">
                            {/* User Info */}
                            <div className="d-flex align-items-center mb-1">
                                <strong className="text-dark me-2">
                                    {reply.user_name?.trim()
                                        ? reply.user_name
                                        : (reply.user_id ? 'Verified User' : 'Guest User')}
                                </strong>
                                {isVerifiedUser ? (
                                    <span className="badge bg-info bg-opacity-10 text-info border border-info border-opacity-25 small">
                                        ✓ Verified
                                    </span>
                                ) : (
                                    <span className="badge bg-secondary bg-opacity-10 text-secondary border border-secondary border-opacity-25 small">
                                        Guest
                                    </span>
                                )}
                            </div>

                            {/* Comment */}
                            <p className="text-dark mb-1 small">{reply.comment}</p>

                            {/* Date */}
                            <div className="text-muted small">
                                {reply.created_at
                                    ? new Date(reply.created_at).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })
                                    : 'No date'}
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="d-flex align-items-center gap-3 mt-2 pt-2 border-top">
                        {/* Likes/Dislikes */}
                        <div className="d-flex align-items-center gap-2">
                            <button
                                onClick={() => handleLike(true)}
                                className={`btn btn-sm d-flex align-items-center gap-1 p-1 ${
                                    userReaction === 'like' ? 'btn-success' : 'btn-outline-success'
                                }`}
                                title="Like this reply"
                            >
                                <span style={{ fontSize: '12px' }}>👍</span>
                                <span className="small" style={{ fontSize: '12px' }}>
                                    {reply.likes_count || 0}
                                </span>
                            </button>

                            <button
                                onClick={() => handleLike(false)}
                                className={`btn btn-sm d-flex align-items-center gap-1 p-1 ${
                                    userReaction === 'dislike' ? 'btn-danger' : 'btn-outline-danger'
                                }`}
                                title="Dislike this reply"
                            >
                                <span style={{ fontSize: '12px' }}>👎</span>
                                <span className="small" style={{ fontSize: '12px' }}>
                                    {reply.dislikes_count || 0}
                                </span>
                            </button>
                        </div>

                        {/* Share Dropdown */}
                        <div className="dropdown">
                            <button
                                className="btn btn-outline-primary btn-sm dropdown-toggle d-flex align-items-center gap-1 p-1"
                                type="button"
                                data-bs-toggle="dropdown"
                                title="Share this reply"
                            >
                                <span style={{ fontSize: '12px' }}>↗</span>
                                <span className="small" style={{ fontSize: '12px' }}>
                                    Share ({reply.shares_count || 0})
                                </span>
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <button 
                                        className="dropdown-item small"
                                        onClick={() => handleQuickShare('facebook')}
                                    >
                                        <i className="bi bi-facebook me-2"></i>Facebook
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        className="dropdown-item small"
                                        onClick={() => handleQuickShare('twitter')}
                                    >
                                        <i className="bi bi-twitter me-2"></i>Twitter
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        className="dropdown-item small"
                                        onClick={() => handleQuickShare('whatsapp')}
                                    >
                                        <i className="bi bi-whatsapp me-2"></i>WhatsApp
                                    </button>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <button 
                                        className="dropdown-item small"
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
        );
    };

    // ✅ Render Replies List
    if (loading) {
        return (
            <div className="text-center py-3">
                <div className="spinner-border spinner-border-sm text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <small className="text-muted ms-2">Loading replies...</small>
            </div>
        );
    }

    return (
        <div className="replies-container">
            {replies.length === 0 ? (
                <div className="text-center py-3">
                    <small className="text-muted">No replies yet.</small>
                </div>
            ) : (
                <>
                    {replies.map((reply) => (
                        <ReplyItem key={reply.id} reply={reply} />
                    ))}
                    
                    {/* Pagination */}
                    {pagination.last_page > 1 && (
                        <div className="d-flex justify-content-center align-items-center gap-2 mt-3">
                            <button
                                onClick={() => fetchReplies(pagination.current_page - 1)}
                                disabled={pagination.current_page === 1}
                                className="btn btn-outline-primary btn-sm"
                            >
                                Previous
                            </button>
                            
                            <span className="px-3 py-1 text-muted small">
                                Page {pagination.current_page} of {pagination.last_page}
                            </span>
                            
                            <button
                                onClick={() => fetchReplies(pagination.current_page + 1)}
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
    );
};

export default ReplyList;
