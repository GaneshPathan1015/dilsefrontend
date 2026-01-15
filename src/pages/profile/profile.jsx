import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../api/axios";

// Toast notification function
const showToast = (message, type = 'success') => {
  const existingToasts = document.querySelectorAll('.custom-toast');
  existingToasts.forEach(toast => {
    if (document.body.contains(toast)) {
      document.body.removeChild(toast);
    }
  });

  const toast = document.createElement('div');
  toast.className = 'custom-toast';
  toast.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 16px 24px;
    border-radius: 12px;
    color: white;
    font-weight: 600;
    z-index: 10001;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    transform: translateX(400px);
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    max-width: 350px;
    word-wrap: break-word;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    line-height: 1.4;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  `;

  if (type === 'success') {
    toast.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
  } else {
    toast.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
  }

  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.transform = 'translateX(0)';
  }, 100);

  setTimeout(() => {
    toast.style.transform = 'translateX(400px)';
    setTimeout(() => {
      if (document.body.contains(toast)) {
        document.body.removeChild(toast);
      }
    }, 400);
  }, 4000);
};

const Profile = () => {
  const [activeTab, setActiveTab] = useState("orders");
  const [logoutLoading, setLogoutLoading] = useState(false);
  const { user, logout, updateUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [addressLoading, setAddressLoading] = useState(false);

  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [cancellingOrder, setCancellingOrder] = useState(null);
  const [cancellationReason, setCancellationReason] = useState("");
  const [cancelLoading, setCancelLoading] = useState(false);

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileForm, setProfileForm] = useState({
    name: "",
    email: "",
    title: "",
    dob: "",
    anniversary_date: "",
    image: null
  });
  const [profileLoading, setProfileLoading] = useState(false);
  const [profileImagePreview, setProfileImagePreview] = useState("");

  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [addressForm, setAddressForm] = useState({
    first_name: "",
    last_name: "",
    country: "India",
    address: {
      street: "",
      apartment: "",
      city: "",
      state: "",
      zip_code: ""
    },
    phone_number: "",
    is_get_offer: false
  });
  const [addressSaveLoading, setAddressSaveLoading] = useState(false);

  const [pagination, setPagination] = useState({
    current_page: 1,
    last_page: 1,
    next_page_url: null,
  });
  const ordersCache = useRef({});
  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isSmallMobile = windowWidth <= 368;

  // Function to get full image URL - FIXED VERSION
  const getImageUrl = (imagePath) => {
    if (!imagePath || imagePath === "null" || imagePath === "undefined") {
      return "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=150&h=150&fit=crop&crop=face";
    }

    // If already a full URL
    if (imagePath.startsWith('http')) {
      return imagePath;
    }

    // If starts with /storage/
    if (imagePath.startsWith('/storage/')) {
      return `https://dilsejewels.com${imagePath}`;
    }

    // If starts with storage/ (without slash)
    if (imagePath.startsWith('storage/')) {
      return `https://dilsejewels.com/${imagePath}`;
    }

    // If starts with /
    if (imagePath.startsWith('/')) {
      return `https://dilsejewels.com${imagePath}`;
    }

    // For profile_images
    if (imagePath.includes('profile_images')) {
      return `https://dilsejewels.com/storage/${imagePath}`;
    }

    // For variation images
    if (imagePath.includes('variation_images')) {
      // Remove any leading /storage/ if present
      const cleanPath = imagePath.replace('/storage/', '');
      return `https://dilsejewels.com/storage/${cleanPath}`;
    }

    // For shape images
    if (imagePath.includes('shapes')) {
      return `https://dilsejewels.com${imagePath}`;
    }

    // Default fallback
    return "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=150&h=150&fit=crop&crop=face";
  };

  const getFirstProductImage = (order) => {
    if (!order || !order.item_details) {
      return getImageUrl(order?.image);
    }

    try {
      let items = [];
      if (typeof order.item_details === 'string') {
        items = JSON.parse(order.item_details);
        if (Array.isArray(items)) {
          if (items.length > 0 && items[0].images && items[0].images.length > 0) {
            return getImageUrl(items[0].images[0]);
          }
        } else if (items && items.items && Array.isArray(items.items)) {
          if (items.items.length > 0 && items.items[0].images && items.items[0].images.length > 0) {
            return getImageUrl(items.items[0].images[0]);
          }
        }
      }
    } catch (err) {
      console.error("Error parsing order items for image", err);
    }

    return getImageUrl(order.image);
  };

  const fetchUserAddress = async () => {
    try {
      setAddressLoading(true);
      const response = await axiosClient.get('/api/address');
      if ((response.data.success && response.data.data) || (response.data.status === 'success' && response.data.data)) {
        setAddresses([response.data.data]);
      } else {
        setAddresses([]);
      }
    } catch (err) {
      console.error("Error fetching address:", err);
      setAddresses([]);
    } finally {
      setAddressLoading(false);
    }
  };

  const fetchOrders = async (page = 1) => {
    if (ordersCache.current[page]) {
      setOrders((prev) => [...prev, ...ordersCache.current[page]]);
      setPagination((prev) => ({ ...prev, current_page: page }));
      return;
    }

    try {
      setLoading(true);
      const response = await axiosClient.get(`/api/get-orders?page=${page}`);
      const data = response.data.data || [];

      ordersCache.current[page] = data;
      setOrders((prev) => [...prev, ...data]);
      setPagination({
        current_page: response.data.current_page,
        last_page: response.data.last_page,
        next_page_url: response.data.next_page_url,
      });
    } catch (err) {
      console.error("Error fetching orders:", err);
    } finally {
      setLoading(false);
    }
  };

  // Load profile data into form - FIXED
  const loadProfileData = () => {
    if (user) {
      setProfileForm({
        name: user.name || "",
        email: user.email || "",
        title: user.title || "",
        dob: user.dob || "",
        anniversary_date: user.anniversary_date || "",
        image: null
      });

      // Use image_url if available, otherwise use image
      const imageSource = user.image_url || user.image;
      console.log("Loading profile data:");
      console.log("User:", user);
      console.log("User image:", user.image);
      console.log("User image_url:", user.image_url);
      console.log("Image source:", imageSource);
      console.log("Generated URL:", getImageUrl(imageSource));

      setProfileImagePreview(getImageUrl(imageSource));
    }
  };

  const loadAddressData = (address = null) => {
    if (address) {
      setEditingAddress(address);
      setAddressForm({
        first_name: address.first_name || "",
        last_name: address.last_name || "",
        country: address.country || "India",
        address: {
          street: address.address?.street || address.address?.address_line1 || "",
          apartment: address.address?.apartment || address.address?.address_line2 || "",
          city: address.address?.city || "",
          state: address.address?.state || "",
          zip_code: address.address?.zip_code || address.address?.zip || ""
        },
        phone_number: address.phone_number || "",
        is_get_offer: address.is_get_offer || false
      });
    } else {
      setEditingAddress(null);
      setAddressForm({
        first_name: user?.name?.split(' ')[0] || "",
        last_name: user?.name?.split(' ').slice(1).join(' ') || "",
        country: "India",
        address: {
          street: "",
          apartment: "",
          city: "",
          state: "",
          zip_code: ""
        },
        phone_number: "",
        is_get_offer: false
      });
    }
  };

  // Image fallback component - FIXED
  const ImageWithFallback = ({ src, alt, style, fallbackSrc }) => {
    const [imgSrc, setImgSrc] = useState('');
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
      if (src) {
        console.log(`ImageWithFallback: Setting src to ${src}`);
        setImgSrc(src);
        setHasError(false);
      }
    }, [src]);

    const handleError = (e) => {
      console.log(`Image failed to load: ${src}`, e);
      if (!hasError) {
        setImgSrc(fallbackSrc || "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=150&h=150&fit=crop&crop=face");
        setHasError(true);
      }
    };

    if (!src && !imgSrc) {
      return (
        <img
          src={fallbackSrc || "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=150&h=150&fit=crop&crop=face"}
          alt={alt}
          style={style}
        />
      );
    }

    return (
      <img
        src={imgSrc || src}
        alt={alt}
        style={style}
        onError={handleError}
        loading="lazy"
      />
    );
  };

  // Handle profile update - OPTIMIZED
  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setProfileLoading(true);

    try {
      const formData = new FormData();
      formData.append('name', profileForm.name);
      formData.append('email', profileForm.email);
      if (profileForm.title) formData.append('title', profileForm.title);
      if (profileForm.dob) formData.append('dob', profileForm.dob);
      if (profileForm.anniversary_date) formData.append('anniversary_date', profileForm.anniversary_date);
      if (profileForm.image) {
        console.log("Uploading image:", profileForm.image);
        formData.append('image', profileForm.image);
      }

      const response = await axiosClient.post('/api/profile/update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log("Profile update response:", response.data);

      if (response.data.status === 'success') {
        const userData = response.data.data;
        if (userData) {
          // Update user context
          if (updateUser && typeof updateUser === 'function') {
            updateUser(userData);
          }

          // Update local state
          const newImageUrl = getImageUrl(userData.image_url || userData.image);
          console.log("New image URL after update:", newImageUrl);
          setProfileImagePreview(newImageUrl);
          setIsEditingProfile(false);

          showToast(response.data.message || 'Profile updated successfully!', 'success');

          // Force reload after 500ms
          setTimeout(() => {
            if (updateUser && typeof updateUser === 'function') {
              updateUser(userData);
            }
          }, 500);
        } else {
          showToast('Profile updated but no user data returned', 'error');
        }
      } else {
        throw new Error(response.data.message || 'Failed to update profile');
      }
    } catch (err) {
      console.error("Error updating profile:", err);
      console.error("Error response:", err.response?.data);

      let errorMessage = 'Failed to update profile. Please try again.';

      if (err.response?.data?.errors) {
        const errors = Object.values(err.response.data.errors).flat();
        errorMessage = `Failed to update profile: ${errors.join(', ')}`;
      } else if (err.response?.data?.message) {
        errorMessage = `Failed to update profile: ${err.response.data.message}`;
      } else if (err.message) {
        errorMessage = `Failed to update profile: ${err.message}`;
      }

      showToast(errorMessage, 'error');
    } finally {
      setProfileLoading(false);
    }
  };

  const handleAddressSave = async (e) => {
    e.preventDefault();
    setAddressSaveLoading(true);

    try {
      const response = await axiosClient.post('/api/address', addressForm);

      if (response.data.status === 'success' || response.data.success) {
        const addressData = response.data.data;
        if (addressData) {
          setAddresses([addressData]);
          setIsEditingAddress(false);
          setEditingAddress(null);
          showToast(response.data.message || 'Address saved successfully!', 'success');
        }
      } else {
        throw new Error(response.data.message || 'Failed to save address');
      }
    } catch (err) {
      console.error("Error saving address:", err);

      let errorMessage = 'Failed to save address. Please try again.';

      if (err.response?.data?.errors) {
        const errors = Object.values(err.response.data.errors).flat();
        errorMessage = `Failed to save address: ${errors.join(', ')}`;
      } else if (err.response?.data?.message) {
        errorMessage = `Failed to save address: ${err.response.data.message}`;
      } else if (err.message) {
        errorMessage = `Failed to save address: ${err.message}`;
      }

      showToast(errorMessage, 'error');
    } finally {
      setAddressSaveLoading(false);
    }
  };

  const handleDeleteAddress = async (addressId) => {
    if (window.confirm("Are you sure you want to delete this address?")) {
      try {
        const response = await axiosClient.delete(`/api/address/${addressId}`);

        if (response.data.status === 'success' || response.data.success) {
          setAddresses([]);
          showToast(response.data.message || 'Address deleted successfully!', 'success');
        } else {
          throw new Error(response.data.message || 'Failed to delete address');
        }
      } catch (err) {
        console.error("Error deleting address:", err);

        let errorMessage = "Failed to delete address. Please try again.";

        if (err.response?.data?.message) {
          errorMessage = `Failed to delete address: ${err.response.data.message}`;
        }

        showToast(errorMessage, 'error');
      }
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileForm({ ...profileForm, image: file });
      setProfileImagePreview(URL.createObjectURL(file));
    }
  };

  const handleCancelOrder = async () => {
    if (!cancellingOrder) return;

    if (!cancellationReason.trim()) {
      showToast("Please provide a cancellation reason", "error");
      return;
    }

    if (cancellationReason.trim().length < 10) {
      showToast("Cancellation reason must be at least 10 characters long", "error");
      return;
    }

    setCancelLoading(true);
    try {
      const response = await axiosClient.post(`/api/cancel-order/${cancellingOrder.id}`, {
        cancellation_reason: cancellationReason
      });

      if (response.data.status === 'success') {
        const updatedOrders = orders.map(order =>
          order.id === cancellingOrder.id ? response.data.order : order
        );
        setOrders(updatedOrders);

        if (selectedOrder && selectedOrder.id === cancellingOrder.id) {
          setSelectedOrder(response.data.order);
        }

        let successMessage = response.data.message || "Order cancelled successfully!";
        if (response.data.refund_processed) {
          successMessage += " Refund has been initiated for your payment.";
        }

        showToast(successMessage, "success");
        setCancelModalOpen(false);
        setCancellingOrder(null);
        setCancellationReason("");
      }
    } catch (err) {
      console.error("Error cancelling order:", err);

      if (err.response?.data?.message?.includes('cancelled_at') ||
        err.response?.data?.message?.includes('SQLSTATE') ||
        err.response?.data?.message?.includes('column not found')) {
        showToast(
          "System update in progress. Please try again in a few moments.",
          "error"
        );
      } else {
        showToast(
          err.response?.data?.message || "Failed to cancel order",
          "error"
        );
      }
    } finally {
      setCancelLoading(false);
    }
  };

  const openCancelModal = (order) => {
    setCancellingOrder(order);
    setCancellationReason("");
    setCancelModalOpen(true);
  };

  const canCancelOrder = (order) => {
    const nonCancellableStatuses = ['delivered', 'shipped', 'cancelled'];
    return !nonCancellableStatuses.includes(order.order_status?.toLowerCase());
  };

  const getCancellationMessage = (order) => {
    if (order.order_status?.toLowerCase() === 'delivered') {
      return "This order has been delivered and cannot be cancelled";
    }
    if (order.order_status?.toLowerCase() === 'shipped') {
      return "This order has been shipped and cannot be cancelled";
    }
    if (order.order_status?.toLowerCase() === 'cancelled') {
      return "This order has already been cancelled";
    }
    return "You can cancel this order";
  };

  const getPaymentMethodDisplay = (paymentMode) => {
    const paymentMethods = {
      'cod': 'Cash on Delivery',
      'paypal': 'PayPal',
      'upi': 'UPI',
      'card': 'Credit/Debit Card',
      'netbanking': 'Net Banking',
      'razorpay': 'Razorpay'
    };
    return paymentMethods[paymentMode] || paymentMode;
  };

  const getPaymentTransactionId = (order) => {
    if (order.payment_mode === 'paypal') {
      return order.paypal_order_id || order.transaction_id;
    } else if (order.payment_mode === 'razorpay') {
      return order.razorpay_payment_id || order.razorpay_order_id;
    } else {
      return order.transaction_id;
    }
  };

  const formatAddress = (addressData) => {
    if (!addressData) return "No address provided";

    if (typeof addressData === 'string') {
      try {
        addressData = JSON.parse(addressData);
      } catch (err) {
        return addressData;
      }
    }

    const parts = [
      addressData.apartment,
      addressData.address || addressData.street || addressData.address_line1,
      addressData.city,
      addressData.state,
      addressData.country,
      addressData.zip_code || addressData.zip || addressData.postal_code || addressData.pincode
    ].filter(part => part && part.trim() !== '');

    return parts.join(', ');
  };

  const parseOrderItems = (order) => {
    if (!order || !order.item_details) return [];

    try {
      let parsedData;

      if (typeof order.item_details === 'string') {
        parsedData = JSON.parse(order.item_details);
      } else {
        parsedData = order.item_details;
      }

      if (Array.isArray(parsedData)) {
        return parsedData;
      }

      if (parsedData && parsedData.items && Array.isArray(parsedData.items)) {
        return parsedData.items;
      }

      return [];
    } catch (err) {
      console.error("Error parsing order items:", err);
      return [];
    }
  };

  // Initial fetches
  useEffect(() => {
    if (activeTab === "orders") {
      if (orders.length === 0) fetchOrders(1);
    } else if (activeTab === "address") {
      fetchUserAddress();
    }
  }, [activeTab]);

  // Load profile data when user changes - FIXED
  useEffect(() => {
    console.log("User changed in Profile component:", user);
    loadProfileData();
  }, [user]);

  // Debug user data
  useEffect(() => {
    console.log("Current user in Profile:", user);
    if (user?.image) {
      console.log("User image path:", user.image);
      console.log("Generated URL:", getImageUrl(user.image));
    }
  }, [user]);

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom && !loading && pagination.current_page < pagination.last_page) {
      fetchOrders(pagination.current_page + 1);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatDateTime = (dateString) => {
    if (!dateString) return "N/A";
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed':
      case 'delivered':
      case 'paid':
        return '#10b981';
      case 'processing':
      case 'confirmed':
      case 'pending':
        return '#f59e0b';
      case 'shipped':
        return '#3b82f6';
      case 'cancelled':
      case 'refunded':
      case 'failed':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  const getPaymentColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'paid': return '#10b981';
      case 'pending': return '#f59e0b';
      case 'refunded': return '#8b5cf6';
      case 'failed':
      case 'cancelled':
        return '#ef4444';
      default: return '#6b7280';
    }
  };

  // Modal Styles
  const modalStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(15, 23, 42, 0.6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 10000,
      padding: isSmallMobile ? "8px" : isMobile ? "10px" : "20px",
      backdropFilter: "blur(8px)"
    },
    content: {
      background: "#fff",
      borderRadius: isSmallMobile ? "12px" : "20px",
      width: "100%",
      maxWidth: "600px",
      maxHeight: "90vh",
      overflowY: "auto",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      animation: "modalSlideUp 0.3s ease"
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: isSmallMobile ? "16px" : "24px",
      borderBottom: "1px solid #f1f5f9",
      position: "sticky",
      top: 0,
      background: "white",
      borderRadius: isSmallMobile ? "12px 12px 0 0" : "20px 20px 0 0",
      zIndex: 1
    },
    closeBtn: {
      background: "#f1f5f9",
      border: "none",
      fontSize: "1.5rem",
      cursor: "pointer",
      color: "#64748b",
      padding: "6px",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "36px",
      height: "36px",
      transition: "all 0.3s ease"
    },
    form: {
      padding: isSmallMobile ? "16px" : "24px",
      background: "#fff"
    },
    imageUpload: {
      display: "flex",
      flexDirection: isSmallMobile ? "column" : "row",
      gap: "20px",
      alignItems: "center",
      marginBottom: "24px",
      padding: isSmallMobile ? "16px" : "24px",
      background: "#f8fafc",
      borderRadius: "16px",
      border: "2px dashed #e2e8f0",
      textAlign: isSmallMobile ? "center" : "left"
    },
    imagePreview: {
      width: isSmallMobile ? "80px" : "100px",
      height: isSmallMobile ? "80px" : "100px",
      borderRadius: "16px",
      overflow: "hidden",
      border: "3px solid #e2e8f0",
      flexShrink: 0,
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
    },
    fileUploadBtn: {
      background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
      color: "white",
      padding: "10px 20px",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "0.9rem",
      fontWeight: "600",
      textAlign: "center",
      transition: "all 0.3s ease",
      display: "inline-block",
      boxShadow: "0 2px 8px rgba(59, 130, 246, 0.3)"
    },
    formGrid: {
      display: "grid",
      gridTemplateColumns: isSmallMobile ? "1fr" : isMobile ? "1fr" : "1fr 1fr",
      gap: "16px",
      marginBottom: "24px"
    },
    formGroup: {
      display: "flex",
      flexDirection: "column"
    },
    formInput: {
      padding: isSmallMobile ? "12px" : "14px",
      border: "2px solid #e2e8f0",
      borderRadius: "12px",
      fontSize: "15px",
      transition: "all 0.3s ease",
      background: "white",
      color: "#1e293b",
      fontWeight: "500"
    },
    formActions: {
      display: "flex",
      flexDirection: isSmallMobile ? "column" : "row",
      gap: "12px",
      justifyContent: "flex-end",
      paddingTop: "24px",
      borderTop: "1px solid #f1f5f9"
    },
    btnCancel: {
      background: "#64748b",
      color: "white",
      border: "none",
      padding: isSmallMobile ? "12px 20px" : "14px 28px",
      borderRadius: "12px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 2px 8px rgba(100, 116, 139, 0.2)",
      width: isSmallMobile ? "100%" : "auto"
    },
    btnSave: {
      background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      color: "white",
      border: "none",
      padding: isSmallMobile ? "12px 20px" : "14px 28px",
      borderRadius: "12px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 2px 8px rgba(16, 185, 129, 0.3)",
      width: isSmallMobile ? "100%" : "auto"
    },
    btnDanger: {
      background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
      color: "white",
      border: "none",
      padding: isSmallMobile ? "12px 20px" : "14px 28px",
      borderRadius: "12px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 2px 8px rgba(239, 68, 68, 0.3)",
      width: isSmallMobile ? "100%" : "auto"
    }
  };

  // Component Styles
  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      padding: isSmallMobile ? "8px" : isMobile ? "10px" : "20px",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    },
    layout: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "300px 1fr",
      gap: isSmallMobile ? "12px" : isMobile ? "16px" : "30px",
      maxWidth: "1400px",
      margin: "0 auto"
    },
    sidebar: {
      background: "white",
      borderRadius: isSmallMobile ? "12px" : "16px",
      padding: isSmallMobile ? "16px" : "24px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
      height: "fit-content",
      position: isMobile ? "static" : "sticky",
      top: "20px",
      border: "1px solid rgba(255, 255, 255, 0.8)",
      backdropFilter: "blur(10px)"
    },
    sidebarHeader: {
      borderBottom: "1px solid #f1f5f9",
      paddingBottom: "20px",
      marginBottom: "20px"
    },
    sidebarTitle: {
      fontSize: isSmallMobile ? "1.1rem" : "1.25rem",
      fontWeight: "700",
      color: "#1e293b",
      margin: "0 0 16px 0",
      letterSpacing: "-0.025em"
    },
    userWelcome: {
      display: "flex",
      alignItems: "center",
      gap: "12px"
    },
    welcomeAvatar: {
      width: isSmallMobile ? "40px" : "50px",
      height: isSmallMobile ? "40px" : "50px",
      borderRadius: "12px",
      overflow: "hidden",
      border: "3px solid #f1f5f9"
    },
    welcomeText: {
      margin: "0"
    },
    welcomeTextP: {
      margin: "0",
      fontSize: isSmallMobile ? "0.8rem" : "0.875rem",
      color: "#64748b",
      fontWeight: "500"
    },
    welcomeTextH3: {
      margin: "4px 0 0 0",
      fontSize: isSmallMobile ? "0.9rem" : "1rem",
      fontWeight: "700",
      color: "#1e293b",
      letterSpacing: "-0.025em"
    },
    sidebarNav: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
      marginBottom: "24px"
    },
    navItem: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: isSmallMobile ? "12px 14px" : "14px 16px",
      border: "none",
      background: "none",
      borderRadius: "12px",
      cursor: "pointer",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      fontSize: isSmallMobile ? "0.9rem" : "0.95rem",
      color: "#64748b",
      fontWeight: "500",
      position: "relative",
      overflow: "hidden"
    },
    navItemActive: {
      background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
      color: "white",
      boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)"
    },
    navIcon: {
      fontSize: isSmallMobile ? "1.1rem" : "1.25rem",
      width: "20px",
      textAlign: "center"
    },
    navText: {
      fontWeight: "600"
    },
    logoutBtn: {
      width: "100%",
      padding: isSmallMobile ? "12px 14px" : "14px 16px",
      background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
      color: "white",
      border: "none",
      borderRadius: "12px",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: isSmallMobile ? "0.9rem" : "0.95rem",
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      boxShadow: "0 2px 8px rgba(239, 68, 68, 0.2)"
    },
    content: {
      background: "white",
      borderRadius: isSmallMobile ? "12px" : "16px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
      overflow: "hidden",
      border: "1px solid rgba(255, 255, 255, 0.8)"
    },
    tabHeader: {
      padding: isSmallMobile ? "20px 20px 0" : isMobile ? "24px 24px 0" : "32px 32px 0",
      borderBottom: "1px solid #f1f5f9",
      background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)"
    },
    tabTitle: {
      fontSize: isSmallMobile ? "1.4rem" : isMobile ? "1.6rem" : "2rem",
      fontWeight: "800",
      color: "#1e293b",
      margin: "0 0 8px 0",
      letterSpacing: "-0.025em"
    },
    tabDescription: {
      color: "#64748b",
      margin: "0 0 24px 0",
      fontSize: isSmallMobile ? "0.95rem" : "1.05rem",
      fontWeight: "500"
    },
    emptyState: {
      textAlign: "center",
      padding: isSmallMobile ? "40px 16px" : isMobile ? "60px 20px" : "80px 20px",
      color: "#64748b"
    },
    emptyIcon: {
      fontSize: isSmallMobile ? "3rem" : "4rem",
      marginBottom: "20px",
      opacity: 0.7
    },
    browseBtn: {
      background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
      color: "white",
      border: "none",
      padding: isSmallMobile ? "12px 24px" : "14px 32px",
      borderRadius: "12px",
      fontWeight: "700",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontSize: isSmallMobile ? "0.9rem" : "1rem",
      boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)"
    },
    orderCard: {
      display: "flex",
      flexDirection: isSmallMobile ? "column" : "row",
      justifyContent: "space-between",
      alignItems: isSmallMobile ? "flex-start" : "center",
      padding: isSmallMobile ? "16px" : "24px",
      border: "2px solid #f1f5f9",
      borderRadius: "16px",
      marginBottom: "16px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      background: "white",
      position: "relative",
      overflow: "hidden",
      gap: isSmallMobile ? "16px" : "0"
    },
    orderMainInfo: {
      display: "flex",
      flexDirection: isSmallMobile ? "column" : "row",
      alignItems: isSmallMobile ? "flex-start" : "center",
      gap: isSmallMobile ? "16px" : "20px",
      flex: 1,
      width: isSmallMobile ? "100%" : "auto"
    },
    orderImage: {
      width: isSmallMobile ? "100px" : "80px",
      height: isSmallMobile ? "100px" : "80px",
      objectFit: "cover",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease"
    },
    orderBadge: {
      position: "absolute",
      top: isSmallMobile ? "-4px" : "-6px",
      right: isSmallMobile ? "-4px" : "-6px",
      background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
      color: "white",
      padding: isSmallMobile ? "3px 8px" : "4px 10px",
      borderRadius: "20px",
      fontSize: isSmallMobile ? "0.7rem" : "0.75rem",
      fontWeight: "700",
      boxShadow: "0 2px 8px rgba(59, 130, 246, 0.3)"
    },
    statusTag: {
      padding: isSmallMobile ? "4px 10px" : "6px 14px",
      borderRadius: "20px",
      fontSize: isSmallMobile ? "0.75rem" : "0.8rem",
      fontWeight: "700",
      color: "white",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"
    },
    accountCard: {
      display: "flex",
      flexDirection: isSmallMobile ? "column" : isMobile ? "column" : "row",
      gap: isSmallMobile ? "20px" : "30px",
      padding: isSmallMobile ? "20px" : isMobile ? "24px" : "32px",
      background: "white",
      textAlign: isSmallMobile ? "center" : "left"
    },
    avatarImage: {
      width: isSmallMobile ? "100px" : isMobile ? "120px" : "120px",
      height: isSmallMobile ? "100px" : isMobile ? "120px" : "120px",
      borderRadius: isSmallMobile ? "16px" : "20px",
      objectFit: "cover",
      border: "4px solid #f1f5f9",
      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
      margin: isSmallMobile ? "0 auto" : "0"
    },
    accountStats: {
      display: "grid",
      gridTemplateColumns: isSmallMobile ? "1fr" : isMobile ? "repeat(3, 1fr)" : "repeat(3, 1fr)",
      gap: isSmallMobile ? "12px" : "20px",
      margin: "30px 0",
      padding: isSmallMobile ? "16px" : "24px",
      background: "#f8fafc",
      borderRadius: "16px",
      border: "2px solid #f1f5f9"
    },
    addressGrid: {
      display: "grid",
      gridTemplateColumns: isSmallMobile ? "1fr" : isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))",
      gap: isSmallMobile ? "16px" : "24px",
      padding: isSmallMobile ? "20px" : isMobile ? "24px" : "32px"
    },
    addressCard: {
      background: "white",
      border: "2px solid #f1f5f9",
      borderRadius: "16px",
      padding: isSmallMobile ? "16px" : "24px",
      transition: "all 0.3s ease",
      position: "relative",
      overflow: "hidden"
    },
    defaultBadge: {
      background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      color: "white",
      padding: isSmallMobile ? "3px 10px" : "4px 12px",
      borderRadius: "20px",
      fontSize: isSmallMobile ? "0.7rem" : "0.75rem",
      fontWeight: "700"
    },
    addNewCard: {
      border: "2px dashed #cbd5e1",
      background: "#f8fafc",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "all 0.3s ease",
      minHeight: isSmallMobile ? "150px" : "200px"
    },
    spinner: {
      width: "16px",
      height: "16px",
      border: "2px solid transparent",
      borderTop: "2px solid currentColor",
      borderRadius: "50%",
      animation: "spin 1s linear infinite"
    },
    orderAmount: {
      textAlign: isSmallMobile ? "left" : "right",
      flexShrink: 0,
      width: isSmallMobile ? "100%" : "auto",
      display: isSmallMobile ? "flex" : "block",
      justifyContent: isSmallMobile ? "space-between" : "flex-start",
      alignItems: isSmallMobile ? "center" : "flex-start",
      paddingTop: isSmallMobile ? "16px" : "0",
      borderTop: isSmallMobile ? "1px solid #f1f5f9" : "none"
    },
    addressActions: {
      display: "flex",
      flexDirection: isSmallMobile ? "column" : "row",
      gap: "8px"
    },
    addressActionBtn: {
      background: "#3b82f6",
      color: "white",
      border: "none",
      padding: isSmallMobile ? "8px 12px" : "10px 16px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: isSmallMobile ? "0.8rem" : "0.9rem",
      width: isSmallMobile ? "100%" : "auto"
    },
    addressActionBtnDanger: {
      background: "#ef4444",
      color: "white",
      border: "none",
      padding: isSmallMobile ? "8px 12px" : "10px 16px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: isSmallMobile ? "0.8rem" : "0.9rem",
      width: isSmallMobile ? "100%" : "auto"
    }
  };

  // Profile Edit Modal
  const renderProfileEditModal = () => (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.content}>
        <div style={modalStyles.header}>
          <h2 style={{ margin: 0, fontSize: isSmallMobile ? "1.3rem" : "1.5rem", fontWeight: "700", color: "#1e293b" }}>Edit Profile</h2>
          <button
            style={modalStyles.closeBtn}
            onClick={() => setIsEditingProfile(false)}
          >
            ×
          </button>
        </div>

        <form onSubmit={handleProfileUpdate} style={modalStyles.form}>
          <div style={modalStyles.imageUpload}>
            <div style={modalStyles.imagePreview}>
              <ImageWithFallback
                src={profileImagePreview}
                alt="Profile Preview"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                fallbackSrc="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=150&h=150&fit=crop&crop=face"
              />
            </div>
            <div style={{ display: "flex", flexDirection: isSmallMobile ? "row" : "column", gap: "12px", width: isSmallMobile ? "100%" : "auto", justifyContent: isSmallMobile ? "space-between" : "flex-start" }}>
              <label style={modalStyles.fileUploadBtn}>
                Choose Photo
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: 'none' }}
                />
              </label>
              <button
                type="button"
                style={{
                  background: "#64748b",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  transition: "all 0.3s ease"
                }}
                onClick={() => {
                  setProfileForm({ ...profileForm, image: null });
                  setProfileImagePreview(getImageUrl(user?.image_url || user?.image));
                }}
              >
                Remove
              </button>
            </div>
          </div>

          <div style={modalStyles.formGrid}>
            <div style={{ ...modalStyles.formGroup, gridColumn: isSmallMobile ? "1 / -1" : "auto" }}>
              <label style={{ marginBottom: "8px", fontWeight: "600", color: "#374151" }}>Full Name *</label>
              <input
                type="text"
                value={profileForm.name}
                onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                required
                style={modalStyles.formInput}
              />
            </div>

            <div style={{ ...modalStyles.formGroup, gridColumn: isSmallMobile ? "1 / -1" : "auto" }}>
              <label style={{ marginBottom: "8px", fontWeight: "600", color: "#374151" }}>Email *</label>
              <input
                type="email"
                value={profileForm.email}
                onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                required
                style={modalStyles.formInput}
              />
            </div>

            <div style={modalStyles.formGroup}>
              <label style={{ marginBottom: "8px", fontWeight: "600", color: "#374151" }}>Title</label>
              <select
                value={profileForm.title}
                onChange={(e) => setProfileForm({ ...profileForm, title: e.target.value })}
                style={modalStyles.formInput}
              >
                <option value="">Select Title</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
                <option value="Dr">Dr</option>
                <option value="Prof">Prof</option>
              </select>
            </div>

            <div style={modalStyles.formGroup}>
              <label style={{ marginBottom: "8px", fontWeight: "600", color: "#374151" }}>Date of Birth</label>
              <input
                type="date"
                value={profileForm.dob}
                onChange={(e) => setProfileForm({ ...profileForm, dob: e.target.value })}
                style={modalStyles.formInput}
              />
            </div>

            <div style={modalStyles.formGroup}>
              <label style={{ marginBottom: "8px", fontWeight: "600", color: "#374151" }}>Anniversary Date</label>
              <input
                type="date"
                value={profileForm.anniversary_date}
                onChange={(e) => setProfileForm({ ...profileForm, anniversary_date: e.target.value })}
                style={modalStyles.formInput}
              />
            </div>
          </div>

          <div style={modalStyles.formActions}>
            <button
              type="button"
              style={modalStyles.btnCancel}
              onClick={() => setIsEditingProfile(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={modalStyles.btnSave}
              disabled={profileLoading}
            >
              {profileLoading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  // Address Edit Modal
  const renderAddressEditModal = () => (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.content}>
        <div style={modalStyles.header}>
          <h2 style={{ margin: 0, fontSize: isSmallMobile ? "1.3rem" : "1.5rem", fontWeight: "700", color: "#1e293b" }}>
            {editingAddress ? 'Edit Address' : 'Add New Address'}
          </h2>
          <button
            style={modalStyles.closeBtn}
            onClick={() => {
              setIsEditingAddress(false);
              setEditingAddress(null);
            }}
          >
            ×
          </button>
        </div>

        <form onSubmit={handleAddressSave} style={modalStyles.form}>
          <div style={modalStyles.formGrid}>
            <div style={modalStyles.formGroup}>
              <label style={{ marginBottom: "8px", fontWeight: "600", color: "#374151" }}>First Name *</label>
              <input
                type="text"
                value={addressForm.first_name}
                onChange={(e) => setAddressForm({ ...addressForm, first_name: e.target.value })}
                required
                style={modalStyles.formInput}
              />
            </div>

            <div style={modalStyles.formGroup}>
              <label style={{ marginBottom: "8px", fontWeight: "600", color: "#374151" }}>Last Name</label>
              <input
                type="text"
                value={addressForm.last_name}
                onChange={(e) => setAddressForm({ ...addressForm, last_name: e.target.value })}
                style={modalStyles.formInput}
              />
            </div>

            <div style={{ ...modalStyles.formGroup, gridColumn: "1 / -1" }}>
              <label style={{ marginBottom: "8px", fontWeight: "600", color: "#374151" }}>Street Address *</label>
              <input
                type="text"
                value={addressForm.address.street}
                onChange={(e) => setAddressForm({
                  ...addressForm,
                  address: { ...addressForm.address, street: e.target.value }
                })}
                placeholder="123 Main Street"
                required
                style={modalStyles.formInput}
              />
            </div>

            <div style={{ ...modalStyles.formGroup, gridColumn: "1 / -1" }}>
              <label style={{ marginBottom: "8px", fontWeight: "600", color: "#374151" }}>Apartment, Suite, etc.</label>
              <input
                type="text"
                value={addressForm.address.apartment}
                onChange={(e) => setAddressForm({
                  ...addressForm,
                  address: { ...addressForm.address, apartment: e.target.value }
                })}
                placeholder="Apartment 4B"
                style={modalStyles.formInput}
              />
            </div>

            <div style={modalStyles.formGroup}>
              <label style={{ marginBottom: "8px", fontWeight: "600", color: "#374151" }}>City *</label>
              <input
                type="text"
                value={addressForm.address.city}
                onChange={(e) => setAddressForm({
                  ...addressForm,
                  address: { ...addressForm.address, city: e.target.value }
                })}
                required
                style={modalStyles.formInput}
              />
            </div>

            <div style={modalStyles.formGroup}>
              <label style={{ marginBottom: "8px", fontWeight: "600", color: "#374151" }}>State *</label>
              <input
                type="text"
                value={addressForm.address.state}
                onChange={(e) => setAddressForm({
                  ...addressForm,
                  address: { ...addressForm.address, state: e.target.value }
                })}
                required
                style={modalStyles.formInput}
              />
            </div>

            <div style={modalStyles.formGroup}>
              <label style={{ marginBottom: "8px", fontWeight: "600", color: "#374151" }}>ZIP Code *</label>
              <input
                type="text"
                value={addressForm.address.zip_code}
                onChange={(e) => setAddressForm({
                  ...addressForm,
                  address: { ...addressForm.address, zip_code: e.target.value }
                })}
                required
                style={modalStyles.formInput}
              />
            </div>

            <div style={modalStyles.formGroup}>
              <label style={{ marginBottom: "8px", fontWeight: "600", color: "#374151" }}>Country *</label>
              <select
                value={addressForm.country}
                onChange={(e) => setAddressForm({ ...addressForm, country: e.target.value })}
                required
                style={modalStyles.formInput}
              >
                <option value="India">India</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
                <option value="India">India</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div style={modalStyles.formGroup}>
              <label style={{ marginBottom: "8px", fontWeight: "600", color: "#374151" }}>Phone Number *</label>
              <input
                type="tel"
                value={addressForm.phone_number}
                onChange={(e) => setAddressForm({ ...addressForm, phone_number: e.target.value })}
                required
                style={modalStyles.formInput}
              />
            </div>

            <div style={{ ...modalStyles.formGroup, gridColumn: "1 / -1" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer", fontWeight: "500", color: "#374151" }}>
                <input
                  type="checkbox"
                  checked={addressForm.is_get_offer}
                  onChange={(e) => setAddressForm({ ...addressForm, is_get_offer: e.target.checked })}
                  style={{ display: "none" }}
                />
                <span style={{
                  width: "20px",
                  height: "20px",
                  border: "2px solid #d1d5db",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  background: addressForm.is_get_offer ? "#3b82f6" : "white",
                  borderColor: addressForm.is_get_offer ? "#3b82f6" : "#d1d5db"
                }}>
                  {addressForm.is_get_offer && "✓"}
                </span>
                I want to receive offers and promotions
              </label>
            </div>
          </div>

          <div style={modalStyles.formActions}>
            <button
              type="button"
              style={modalStyles.btnCancel}
              onClick={() => {
                setIsEditingAddress(false);
                setEditingAddress(null);
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={modalStyles.btnSave}
              disabled={addressSaveLoading}
            >
              {addressSaveLoading ? "Saving..." : "Save Address"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  // Cancel Order Modal
  const renderCancelModal = () => {
    if (!cancelModalOpen) return null;

    return (
      <div style={modalStyles.overlay}>
        <div style={modalStyles.content}>
          <div style={modalStyles.header}>
            <h2 style={{ margin: 0, fontSize: isSmallMobile ? "1.3rem" : "1.5rem", fontWeight: "700", color: "#1e293b" }}>
              Cancel Order
            </h2>
            <button
              style={modalStyles.closeBtn}
              onClick={() => {
                setCancelModalOpen(false);
                setCancellingOrder(null);
                setCancellationReason("");
              }}
            >
              ×
            </button>
          </div>

          <div style={modalStyles.form}>
            <div style={{ marginBottom: "24px" }}>
              <p style={{ margin: "0 0 16px 0", color: "#64748b", fontSize: "1rem" }}>
                Are you sure you want to cancel order <strong>#{cancellingOrder?.order_id}</strong>?
              </p>
              <div style={{
                padding: "16px",
                background: "#fef2f2",
                border: "1px solid #fecaca",
                borderRadius: "12px",
                marginBottom: "16px"
              }}>
                <p style={{ margin: "0 0 8px 0", color: "#dc2626", fontWeight: "600" }}>
                  ⚠️ Important Note:
                </p>
                <p style={{ margin: 0, color: "#b91c1c", fontSize: "0.9rem" }}>
                  {cancellingOrder?.payment_mode === 'cod'
                    ? "This is a Cash on Delivery order. No payment has been processed yet."
                    : `Payment of $${cancellingOrder?.total_price} will be refunded to your original payment method.`
                  }
                </p>
              </div>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#374151" }}>
                Reason for cancellation *
                <span style={{ fontSize: "0.8rem", color: "#64748b", fontWeight: "normal", marginLeft: "8px" }}>
                  (Minimum 10 characters)
                </span>
              </label>
              <textarea
                value={cancellationReason}
                onChange={(e) => setCancellationReason(e.target.value)}
                placeholder="Please tell us why you are cancelling this order. This helps us improve our service..."
                style={{
                  width: "100%",
                  padding: "14px",
                  border: cancellationReason.length > 0 && cancellationReason.length < 10 ? "2px solid #ef4444" : "2px solid #e2e8f0",
                  borderRadius: "12px",
                  fontSize: "15px",
                  minHeight: "120px",
                  resize: "vertical",
                  fontFamily: "inherit",
                  transition: "all 0.3s ease"
                }}
                required
              />
              {cancellationReason.length > 0 && cancellationReason.length < 10 && (
                <p style={{ color: "#ef4444", fontSize: "0.8rem", margin: "8px 0 0 0" }}>
                  Please provide at least 10 characters for the cancellation reason
                </p>
              )}
            </div>

            <div style={modalStyles.formActions}>
              <button
                type="button"
                style={modalStyles.btnCancel}
                onClick={() => {
                  setCancelModalOpen(false);
                  setCancellingOrder(null);
                  setCancellationReason("");
                }}
                disabled={cancelLoading}
              >
                Go Back
              </button>
              <button
                type="button"
                style={modalStyles.btnDanger}
                onClick={handleCancelOrder}
                disabled={cancelLoading || !cancellationReason.trim() || cancellationReason.length < 10}
              >
                {cancelLoading ? (
                  <>
                    <span style={styles.spinner}></span>
                    Cancelling...
                  </>
                ) : (
                  `Confirm Cancellation${cancellingOrder?.payment_mode !== 'cod' ? ' & Refund' : ''}`
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderOrders = () => {
    if (orders.length === 0) {
      return (
        <div style={styles.emptyState}>
          <div style={styles.emptyIcon}>📦</div>
          <h3 style={{ margin: "0 0 12px 0", fontWeight: "700", color: "#374151", fontSize: isSmallMobile ? "1.3rem" : "1.5rem" }}>No orders yet</h3>
          <p style={{ margin: "0 0 32px 0", fontSize: isSmallMobile ? "0.95rem" : "1.05rem", fontWeight: "500" }}>Your order history will appear here once you make a purchase</p>
          <button
            style={styles.browseBtn}
            onClick={() => navigate('/jewelry-list')}
          >
            Browse Products
          </button>
        </div>
      );
    }

    return orders.map((order, index) => {
      const canCancel = canCancelOrder(order);

      return (
        <div
          key={index}
          onClick={() => setSelectedOrder(order)}
          style={styles.orderCard}
        >
          <div style={styles.orderMainInfo}>
            <div style={{ position: "relative", flexShrink: 0 }}>
              <img
                src={getFirstProductImage(order)}
                alt="product"
                style={styles.orderImage}
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=100&h=100&fit=crop";
                }}
              />
              <div style={styles.orderBadge}>{order.total_quantity || 0} items</div>
            </div>
            <div style={{ flex: 1 }}>
              <h4 style={{ margin: "0 0 8px 0", fontWeight: "700", color: "#1e293b", fontSize: isSmallMobile ? "1rem" : "1.1rem" }}>
                Order #{order.order_id}
                {order.cancelled_at && " (Cancelled)"}
              </h4>
              <p style={{ margin: "0 0 12px 0", color: "#64748b", fontSize: isSmallMobile ? "0.85rem" : "0.9rem", fontWeight: "500" }}>
                Placed on {formatDate(order.created_at)}
                {order.cancelled_at && ` • Cancelled on ${formatDate(order.cancelled_at)}`}
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "12px" }}>
                <span style={{ ...styles.statusTag, backgroundColor: getStatusColor(order.order_status) }}>
                  {order.order_status || "Processing"}
                </span>
                <span style={{ ...styles.statusTag, backgroundColor: getPaymentColor(order.payment_status) }}>
                  {order.payment_status || "Pending"}
                </span>
                <span style={{
                  padding: "4px 10px",
                  borderRadius: "20px",
                  fontSize: "0.75rem",
                  fontWeight: "700",
                  color: "#1e293b",
                  background: "#f1f5f9"
                }}>
                  {getPaymentMethodDisplay(order.payment_mode)}
                </span>
              </div>

              {canCancel && (
                <button
                  style={{
                    background: "transparent",
                    color: "#ef4444",
                    border: "2px solid #ef4444",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    fontWeight: "600",
                    cursor: "pointer",
                    fontSize: "0.8rem",
                    transition: "all 0.3s ease"
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    openCancelModal(order);
                  }}
                >
                  Cancel Order
                </button>
              )}
            </div>
          </div>
          <div style={styles.orderAmount}>
            <span style={{ fontSize: isSmallMobile ? "1.2rem" : "1.4rem", fontWeight: "800", color: "#1e293b", display: "block", marginBottom: isSmallMobile ? "0" : "8px" }}>
              ${order.total_price || "0.00"}
            </span>
            <div style={{ color: "#3b82f6", fontSize: isSmallMobile ? "0.85rem" : "0.9rem", fontWeight: "600", display: "flex", alignItems: "center", gap: "4px" }}>
              View Details →
            </div>
          </div>
        </div>
      );
    });
  };

  const renderOrderDetails = (order) => {
    if (!order) return null;

    const items = parseOrderItems(order);

    let addressData = null;
    let billingAddressData = null;

    try {
      addressData = typeof order.address === 'string' ? JSON.parse(order.address) : order.address;
      billingAddressData = typeof order.billing_address === 'string' ? JSON.parse(order.billing_address) : order.billing_address;
    } catch (err) {
      console.error("Error parsing order data", err);
    }

    const canCancel = canCancelOrder(order);
    const isCOD = order.payment_mode === 'cod';
    const isDelivered = order.order_status?.toLowerCase() === 'delivered';
    const paymentTransactionId = getPaymentTransactionId(order);

    return (
      <div style={{ padding: isSmallMobile ? "16px" : isMobile ? "20px" : "32px" }}>
        <div style={{ display: "flex", flexDirection: isSmallMobile ? "column" : "row", alignItems: isSmallMobile ? "flex-start" : "center", gap: isSmallMobile ? "12px" : "20px", marginBottom: "32px", paddingBottom: "20px", borderBottom: "2px solid #f1f5f9" }}>
          <button
            style={{
              background: "#f1f5f9",
              color: "#475569",
              border: "none",
              padding: isSmallMobile ? "8px 16px" : "10px 20px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "600",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: isSmallMobile ? "0.9rem" : "1rem"
            }}
            onClick={() => setSelectedOrder(null)}
          >
            ← Back to Orders
          </button>
          <h2 style={{ margin: 0, fontSize: isSmallMobile ? "1.4rem" : isMobile ? "1.6rem" : "1.8rem", fontWeight: "800", color: "#1e293b" }}>Order Details</h2>
        </div>

        <div style={{ marginBottom: "32px" }}>
          <div style={{ background: "white", padding: isSmallMobile ? "16px" : "24px", borderRadius: "16px", border: "2px solid #f1f5f9" }}>
            <h4 style={{ margin: "0 0 20px 0", fontSize: isSmallMobile ? "1.1rem" : "1.2rem", fontWeight: "700" }}>Order Summary</h4>
            <div style={{ display: "grid", gap: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexDirection: isSmallMobile ? "column" : "row", gap: isSmallMobile ? "4px" : "0" }}>
                <span style={{ fontWeight: "600", color: "#64748b" }}>Order ID:</span>
                <span style={{ fontWeight: "600", color: "#1e293b" }}>{order.order_id}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", flexDirection: isSmallMobile ? "column" : "row", gap: isSmallMobile ? "4px" : "0" }}>
                <span style={{ fontWeight: "600", color: "#64748b" }}>Order Date:</span>
                <span style={{ fontWeight: "600", color: "#1e293b" }}>{formatDate(order.created_at)}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", flexDirection: isSmallMobile ? "column" : "row", gap: isSmallMobile ? "4px" : "0" }}>
                <span style={{ fontWeight: "600", color: "#64748b" }}>Status:</span>
                <span style={{ fontWeight: "600", color: getStatusColor(order.order_status) }}>
                  {order.order_status}
                  {order.cancelled_at && " (Cancelled)"}
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", flexDirection: isSmallMobile ? "column" : "row", gap: isSmallMobile ? "4px" : "0" }}>
                <span style={{ fontWeight: "600", color: "#64748b" }}>Payment:</span>
                <span style={{ fontWeight: "600", color: getPaymentColor(order.payment_status) }}>
                  {order.payment_status}
                  {isCOD && isDelivered && " (Completed)"}
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", flexDirection: isSmallMobile ? "column" : "row", gap: isSmallMobile ? "4px" : "0" }}>
                <span style={{ fontWeight: "600", color: "#64748b" }}>Payment Method:</span>
                <span style={{ fontWeight: "600", color: "#1e293b" }}>
                  {getPaymentMethodDisplay(order.payment_mode)}
                </span>
              </div>

              {order.coupon_code && (
                <div style={{ display: "flex", justifyContent: "space-between", flexDirection: isSmallMobile ? "column" : "row", gap: isSmallMobile ? "4px" : "0" }}>
                  <span style={{ fontWeight: "600", color: "#64748b" }}>Coupon Applied:</span>
                  <span style={{ fontWeight: "600", color: "#10b981" }}>
                    {order.coupon_code} (-${parseFloat(order.coupon_discount || 0).toFixed(2)})
                  </span>
                </div>
              )}

              {paymentTransactionId && (
                <div style={{ display: "flex", justifyContent: "space-between", flexDirection: isSmallMobile ? "column" : "row", gap: isSmallMobile ? "4px" : "0" }}>
                  <span style={{ fontWeight: "600", color: "#64748b" }}>Transaction ID:</span>
                  <span style={{ fontWeight: "600", color: "#3b82f6", fontSize: "0.9rem" }}>{paymentTransactionId}</span>
                </div>
              )}
              {order.cancelled_at && (
                <div style={{ display: "flex", justifyContent: "space-between", flexDirection: isSmallMobile ? "column" : "row", gap: isSmallMobile ? "4px" : "0" }}>
                  <span style={{ fontWeight: "600", color: "#64748b" }}>Cancelled Date:</span>
                  <span style={{ fontWeight: "600", color: "#ef4444" }}>{formatDateTime(order.cancelled_at)}</span>
                </div>
              )}
              {order.cancellation_reason && (
                <div style={{ display: "flex", justifyContent: "space-between", flexDirection: isSmallMobile ? "column" : "row", gap: isSmallMobile ? "4px" : "0" }}>
                  <span style={{ fontWeight: "600", color: "#64748b" }}>Cancellation Reason:</span>
                  <span style={{ fontWeight: "600", color: "#ef4444", textAlign: "right", maxWidth: "200px" }}>{order.cancellation_reason}</span>
                </div>
              )}

              <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #f1f5f9" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexDirection: isSmallMobile ? "column" : "row", gap: isSmallMobile ? "4px" : "0", marginBottom: "8px" }}>
                  <span style={{ fontWeight: "600", color: "#64748b" }}>Subtotal:</span>
                  <span style={{ fontWeight: "600", color: "#1e293b" }}>
                    ${items.reduce((total, item) => total + (parseFloat(item.price || 0) * (item.itemQuantity || 1)), 0).toFixed(2)}
                  </span>
                </div>

                {order.coupon_discount > 0 && (
                  <div style={{ display: "flex", justifyContent: "space-between", flexDirection: isSmallMobile ? "column" : "row", gap: isSmallMobile ? "4px" : "0", marginBottom: "8px" }}>
                    <span style={{ fontWeight: "600", color: "#64748b" }}>Coupon Discount:</span>
                    <span style={{ fontWeight: "600", color: "#10b981" }}>
                      -${parseFloat(order.coupon_discount || 0).toFixed(2)}
                    </span>
                  </div>
                )}

                <div style={{ display: "flex", justifyContent: "space-between", flexDirection: isSmallMobile ? "column" : "row", gap: isSmallMobile ? "4px" : "0", marginBottom: "8px" }}>
                  <span style={{ fontWeight: "600", color: "#64748b" }}>Shipping:</span>
                  <span style={{ fontWeight: "600", color: "#1e293b" }}>
                    ${parseFloat(order.shipping_cost || 0).toFixed(2)}
                  </span>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", flexDirection: isSmallMobile ? "column" : "row", gap: isSmallMobile ? "4px" : "0", paddingTop: "12px", borderTop: "1px solid #f1f5f9" }}>
                  <span style={{ fontWeight: "700", color: "#1e293b" }}>Total Amount:</span>
                  <span style={{ fontWeight: "800", color: "#1e293b", fontSize: isSmallMobile ? "1.1rem" : "1.2rem" }}>${order.total_price}</span>
                </div>
              </div>
            </div>

            {canCancel && (
              <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid #f1f5f9" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: isSmallMobile ? "column" : "row", gap: isSmallMobile ? "16px" : "0" }}>
                  <div style={{ textAlign: isSmallMobile ? "center" : "left" }}>
                    <h5 style={{ margin: "0 0 8px 0", color: "#64748b", fontWeight: "600" }}>
                      Need to cancel this order?
                    </h5>
                    <p style={{ margin: 0, color: "#94a3b8", fontSize: "0.9rem" }}>
                      {isCOD
                        ? "You can cancel this COD order before it is shipped"
                        : `You can cancel this order for a full refund of $${order.total_price}`
                      }
                    </p>
                  </div>
                  <button
                    style={{
                      background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                      color: "white",
                      border: "none",
                      padding: isSmallMobile ? "12px 20px" : "12px 24px",
                      borderRadius: "10px",
                      fontWeight: "700",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 12px rgba(239, 68, 68, 0.3)",
                      width: isSmallMobile ? "100%" : "auto"
                    }}
                    onClick={() => openCancelModal(order)}
                  >
                    Cancel Order{!isCOD && " & Get Refund"}
                  </button>
                </div>
              </div>
            )}

            {!canCancel && (
              <div style={{ marginTop: "16px", padding: "12px", background: "#f8fafc", borderRadius: "8px" }}>
                <p style={{ margin: 0, color: "#64748b", fontSize: "0.9rem", fontWeight: "500" }}>
                  {getCancellationMessage(order)}
                </p>
              </div>
            )}
          </div>
        </div>

        {addressData && (
          <div style={{ marginBottom: "32px" }}>
            <h4 style={{ margin: "0 0 16px 0", fontSize: isSmallMobile ? "1.1rem" : "1.2rem", fontWeight: "700" }}>Shipping Address</h4>
            <div style={styles.addressCard}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px", flexDirection: isSmallMobile ? "column" : "row", gap: isSmallMobile ? "8px" : "0" }}>
                <h4 style={{ margin: 0, fontSize: isSmallMobile ? "1.1rem" : "1.2rem", fontWeight: "700", color: "#1e293b" }}>
                  {order.user_name || addressData.first_name || 'User'}
                </h4>
                <span style={styles.defaultBadge}>Shipping Address</span>
              </div>
              <div style={{ color: "#64748b", lineHeight: "1.6", marginBottom: "20px" }}>
                <p style={{ margin: "0 0 8px 0", fontWeight: "600" }}>{formatAddress(addressData)}</p>
                {addressData.phone && <p style={{ color: "#3b82f6", fontWeight: "600", margin: "8px 0 0 0" }}>📞 {addressData.phone}</p>}
                {addressData.email && <p style={{ color: "#3b82f6", fontWeight: "600", margin: "4px 0 0 0" }}>✉️ {addressData.email}</p>}
              </div>
            </div>
          </div>
        )}

        {billingAddressData && (
          <div style={{ marginBottom: "32px" }}>
            <h4 style={{ margin: "0 0 16px 0", fontSize: isSmallMobile ? "1.1rem" : "1.2rem", fontWeight: "700" }}>Billing Address</h4>
            <div style={styles.addressCard}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px", flexDirection: isSmallMobile ? "column" : "row", gap: isSmallMobile ? "8px" : "0" }}>
                <h4 style={{ margin: 0, fontSize: isSmallMobile ? "1.1rem" : "1.2rem", fontWeight: "700", color: "#1e293b" }}>
                  {billingAddressData.first_name || order.user_name || 'User'}
                </h4>
                <span style={{ ...styles.defaultBadge, background: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)" }}>Billing Address</span>
              </div>
              <div style={{ color: "#64748b", lineHeight: "1.6", marginBottom: "20px" }}>
                <p style={{ margin: "0 0 8px 0", fontWeight: "600" }}>{formatAddress(billingAddressData)}</p>
                {billingAddressData.phone && <p style={{ color: "#3b82f6", fontWeight: "600", margin: "8px 0 0 0" }}>📞 {billingAddressData.phone}</p>}
                {billingAddressData.email && <p style={{ color: "#3b82f6", fontWeight: "600", margin: "4px 0 0 0" }}>✉️ {billingAddressData.email}</p>}
              </div>
            </div>
          </div>
        )}

        <div>
          <h4 style={{ margin: "0 0 16px 0", fontSize: isSmallMobile ? "1.1rem" : "1.2rem", fontWeight: "700" }}>
            Order Items ({items.length})
          </h4>

          {items.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px 20px", color: "#64748b" }}>
              <p>No items found in this order</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {items.map((item, i) => {
                const itemImage = item.images && item.images.length > 0 ? getImageUrl(item.images[0]) : "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=60&h=60&fit=crop";
                const itemName = item.name || `Product ${i + 1}`;
                const itemPrice = parseFloat(item.price || 0).toFixed(2);
                const itemQuantity = item.itemQuantity || item.quantity || 1;
                const productType = item.productType || order.product_type || 'gift';

                return (
                  <div key={i} style={{ display: "flex", gap: "12px", padding: isSmallMobile ? "12px" : "16px", background: "#f8fafc", borderRadius: "12px", alignItems: "center" }}>
                    <div style={{ position: "relative", flexShrink: 0 }}>
                      <img
                        src={itemImage}
                        alt={itemName}
                        style={{ width: isSmallMobile ? "60px" : "80px", height: isSmallMobile ? "60px" : "80px", objectFit: "cover", borderRadius: "8px" }}
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=80&h=80&fit=crop";
                        }}
                      />
                      {(!item.images || item.images.length === 0) && (
                        <div style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: "rgba(0,0,0,0.3)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          fontSize: "0.7rem",
                          fontWeight: "600",
                          borderRadius: "8px"
                        }}>
                          No Image
                        </div>
                      )}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h5 style={{ margin: "0 0 8px 0", fontWeight: "600", color: "#1e293b", fontSize: isSmallMobile ? "0.9rem" : "1rem" }}>
                        {itemName}
                      </h5>
                      <div style={{ display: "flex", gap: isSmallMobile ? "8px" : "16px", flexWrap: "wrap", alignItems: "center" }}>
                        <span style={{ fontWeight: "700", color: "#1e293b", fontSize: isSmallMobile ? "0.9rem" : "1rem" }}>
                          ${itemPrice}
                        </span>
                        <span style={{ color: "#64748b", fontSize: isSmallMobile ? "0.85rem" : "0.9rem", fontWeight: "500" }}>
                          Qty: {itemQuantity}
                        </span>
                        {productType && (
                          <span style={{
                            color: "#8b5cf6",
                            fontSize: isSmallMobile ? "0.8rem" : "0.85rem",
                            fontWeight: "600",
                            background: "#f3f4f6",
                            padding: "4px 10px",
                            borderRadius: "6px"
                          }}>
                            {productType}
                          </span>
                        )}
                      </div>
                      {item.sku && (
                        <p style={{ margin: "4px 0 0 0", color: "#64748b", fontSize: "0.8rem" }}>
                          SKU: {item.sku}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderAddresses = () => {
    if (addressLoading) {
      return <div style={{ textAlign: "center", padding: "40px 20px", color: "#64748b", fontWeight: "600" }}>Loading addresses...</div>;
    }

    if (addresses.length === 0) {
      return (
        <div style={styles.emptyState}>
          <div style={styles.emptyIcon}>📍</div>
          <h3 style={{ margin: "0 0 12px 0", fontWeight: "700", color: "#374151", fontSize: isSmallMobile ? "1.3rem" : "1.5rem" }}>No addresses saved</h3>
          <p style={{ margin: "0 0 32px 0", fontSize: isSmallMobile ? "0.95rem" : "1.05rem", fontWeight: "500" }}>Add your first shipping address to get started</p>
          <button
            style={styles.browseBtn}
            onClick={() => {
              loadAddressData();
              setIsEditingAddress(true);
            }}
          >
            Add New Address
          </button>
        </div>
      );
    }

    return (
      <div style={styles.addressGrid}>
        {addresses.map((address) => (
          <div key={address.id} style={styles.addressCard}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px", flexDirection: isSmallMobile ? "column" : "row", gap: isSmallMobile ? "8px" : "0" }}>
              <h4 style={{ margin: 0, fontSize: isSmallMobile ? "1.1rem" : "1.2rem", fontWeight: "700", color: "#1e293b" }}>
                {address.first_name} {address.last_name}
              </h4>
              <span style={styles.defaultBadge}>Default</span>
            </div>
            <div style={{ color: "#64748b", lineHeight: "1.6", marginBottom: "20px" }}>
              <p style={{ margin: "0 0 8px 0", fontWeight: "600" }}>{formatAddress(address.address)}</p>
              <p style={{ margin: "0 0 8px 0" }}>{address.country}</p>
              {address.phone_number && <p style={{ color: "#3b82f6", fontWeight: "600", margin: "8px 0 0 0" }}>📞 {address.phone_number}</p>}
            </div>
            <div style={styles.addressActions}>
              <button
                style={styles.addressActionBtn}
                onClick={() => {
                  loadAddressData(address);
                  setIsEditingAddress(true);
                }}
              >
                Edit
              </button>
              <button
                style={styles.addressActionBtnDanger}
                onClick={() => handleDeleteAddress(address.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        <div
          style={{ ...styles.addressCard, ...styles.addNewCard }}
          onClick={() => {
            loadAddressData();
            setIsEditingAddress(true);
          }}
        >
          <div style={{ textAlign: "center", color: "#64748b" }}>
            <div style={{ fontSize: isSmallMobile ? "2.5rem" : "3rem", color: "#3b82f6", marginBottom: "12px", fontWeight: "300" }}>+</div>
            <h4 style={{ margin: "0 0 8px 0", color: "#374151", fontWeight: "700", fontSize: isSmallMobile ? "1.1rem" : "1.2rem" }}>Add New Address</h4>
            <p style={{ margin: 0, fontSize: isSmallMobile ? "0.85rem" : "0.9rem" }}>Create a new shipping or billing address</p>
          </div>
        </div>
      </div>
    );
  };

  const renderAccountDetails = () => {
    return (
      <div>
        <div style={styles.tabHeader}>
          <h2 style={styles.tabTitle}>Account Details</h2>
          <p style={styles.tabDescription}>Manage your personal information and preferences</p>
        </div>
        <div style={styles.accountCard}>
          <div style={{ flexShrink: 0 }}>
            <ImageWithFallback
              src={getImageUrl(user?.image_url || user?.image)}
              alt={user?.name}
              style={styles.avatarImage}
              fallbackSrc="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=150&h=150&fit=crop&crop=face"
            />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: "0 0 8px 0", fontSize: isSmallMobile ? "1.4rem" : isMobile ? "1.6rem" : "1.8rem", fontWeight: "800", color: "#1e293b" }}>{user?.name || 'User'}</h3>
            <p style={{ color: "#64748b", margin: "0 0 20px 0", fontSize: isSmallMobile ? "1rem" : "1.1rem", fontWeight: "500" }}>{user?.email || 'user@example.com'}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px", justifyContent: isSmallMobile ? "center" : "flex-start" }}>
              {user?.title && <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#f8fafc", padding: "8px 16px", borderRadius: "20px", fontWeight: "600", color: "#475569", fontSize: isSmallMobile ? "0.8rem" : "0.9rem" }}>👑 {user.title}</span>}
              {user?.dob && <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#f8fafc", padding: "8px 16px", borderRadius: "20px", fontWeight: "600", color: "#475569", fontSize: isSmallMobile ? "0.8rem" : "0.9rem" }}>🎂 {formatDate(user.dob)}</span>}
              {user?.anniversary_date && <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#f8fafc", padding: "8px 16px", borderRadius: "20px", fontWeight: "600", color: "#475569", fontSize: isSmallMobile ? "0.8rem" : "0.9rem" }}>💝 {formatDate(user.anniversary_date)}</span>}
            </div>

            <div style={styles.accountStats}>
              <div style={{ textAlign: "center" }}>
                <span style={{ display: "block", fontSize: isSmallMobile ? "1.6rem" : "2rem", fontWeight: "800", color: "#1e293b", marginBottom: "4px" }}>{orders.length}</span>
                <span style={{ color: "#64748b", fontWeight: "600", fontSize: isSmallMobile ? "0.8rem" : "0.9rem" }}>Total Orders</span>
              </div>
              <div style={{ textAlign: "center" }}>
                <span style={{ display: "block", fontSize: isSmallMobile ? "1.6rem" : "2rem", fontWeight: "800", color: "#1e293b", marginBottom: "4px" }}>
                  ${orders.reduce((total, order) => total + parseFloat(order.total_price || 0), 0).toFixed(2)}
                </span>
                <span style={{ color: "#64748b", fontWeight: "600", fontSize: isSmallMobile ? "0.8rem" : "0.9rem" }}>Total Spent</span>
              </div>
              <div style={{ textAlign: "center" }}>
                <span style={{ display: "block", fontSize: isSmallMobile ? "1.6rem" : "2rem", fontWeight: "800", color: "#1e293b", marginBottom: "4px" }}>
                  {orders.filter(order => order.order_status?.toLowerCase() === 'completed' || order.order_status?.toLowerCase() === 'delivered').length}
                </span>
                <span style={{ color: "#64748b", fontWeight: "600", fontSize: isSmallMobile ? "0.8rem" : "0.9rem" }}>Completed</span>
              </div>
            </div>
            <div style={{ textAlign: isSmallMobile ? "center" : "left" }}>
              <button
                style={{
                  background: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
                  color: "white",
                  border: "none",
                  padding: isSmallMobile ? "12px 24px" : "14px 32px",
                  borderRadius: "12px",
                  fontWeight: "700",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  fontSize: isSmallMobile ? "0.9rem" : "1rem",
                  boxShadow: "0 4px 12px rgba(139, 92, 246, 0.3)"
                }}
                onClick={() => setIsEditingProfile(true)}
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case "orders":
        return (
          <div>
            <div style={styles.tabHeader}>
              <h2 style={styles.tabTitle}>Order History</h2>
              <p style={styles.tabDescription}>View and manage your recent purchases</p>
            </div>
            <div
              style={{ height: isSmallMobile ? "calc(100vh - 150px)" : isMobile ? "calc(100vh - 180px)" : "calc(100vh - 200px)", overflowY: "auto" }}
              onScroll={selectedOrder ? null : handleScroll}
            >
              {selectedOrder
                ? renderOrderDetails(selectedOrder)
                : (
                  <div style={{ padding: isSmallMobile ? "16px" : isMobile ? "20px" : "24px 32px" }}>
                    {renderOrders()}
                    {loading && <div style={{ textAlign: "center", padding: "40px 20px", color: "#64748b", fontWeight: "600" }}>Loading more orders...</div>}
                  </div>
                )
              }
            </div>
          </div>
        );

      case "account":
        return renderAccountDetails();

      case "address":
        return (
          <div>
            <div style={styles.tabHeader}>
              <h2 style={styles.tabTitle}>Saved Addresses</h2>
              <p style={styles.tabDescription}>Manage your shipping and billing addresses</p>
            </div>
            {renderAddresses()}
          </div>
        );

      case "financing":
        return (
          <div>
            <div style={styles.tabHeader}>
              <h2 style={styles.tabTitle}>Financing</h2>
              <p style={styles.tabDescription}>Manage your payment and financing options</p>
            </div>
            <div style={{ padding: isSmallMobile ? "20px" : isMobile ? "24px" : "32px", textAlign: "center" }}>
              <div style={styles.emptyIcon}>💳</div>
              <h3 style={{ margin: "0 0 12px 0", fontWeight: "700", color: "#374151", fontSize: isSmallMobile ? "1.3rem" : "1.5rem" }}>Financing Options</h3>
              <p style={{ margin: "0 0 32px 0", fontSize: isSmallMobile ? "0.95rem" : "1.05rem", fontWeight: "500" }}>Financing features will be available soon</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const handleLogout = async () => {
    setLogoutLoading(true);
    try {
      await logout();
      navigate("/signin");
    } catch (error) {
      console.error("Logout failed:", error);
      showToast("Logout failed. Please try again.", "error");
    } finally {
      setLogoutLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.layout}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          <div style={styles.sidebarHeader}>
            <h2 style={styles.sidebarTitle}>MY ACCOUNT</h2>
            <div style={styles.userWelcome}>
              <div style={styles.welcomeAvatar}>
                <ImageWithFallback
                  src={getImageUrl(user?.image_url || user?.image)}
                  alt={user?.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  fallbackSrc="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=50&h=50&fit=crop&crop=face"
                />
              </div>
              <div style={styles.welcomeText}>
                <p style={styles.welcomeTextP}>Welcome back,</p>
                <h3 style={styles.welcomeTextH3}>{user?.name || 'User'}</h3>
              </div>
            </div>
          </div>

          <nav style={styles.sidebarNav}>
            <button
              style={{
                ...styles.navItem,
                ...(activeTab === "orders" ? styles.navItemActive : {})
              }}
              onClick={() => setActiveTab("orders")}
            >
              <span style={styles.navIcon}>📦</span>
              <span style={styles.navText}>Order History</span>
            </button>
            <button
              style={{
                ...styles.navItem,
                ...(activeTab === "account" ? styles.navItemActive : {})
              }}
              onClick={() => setActiveTab("account")}
            >
              <span style={styles.navIcon}>👤</span>
              <span style={styles.navText}>Account Details</span>
            </button>
            <button
              style={{
                ...styles.navItem,
                ...(activeTab === "address" ? styles.navItemActive : {})
              }}
              onClick={() => setActiveTab("address")}
            >
              <span style={styles.navIcon}>📍</span>
              <span style={styles.navText}>Saved Addresses</span>
            </button>
            <button
              style={{
                ...styles.navItem,
                ...(activeTab === "financing" ? styles.navItemActive : {})
              }}
              onClick={() => setActiveTab("financing")}
            >
              <span style={styles.navIcon}>💳</span>
              <span style={styles.navText}>Financing</span>
            </button>
          </nav>

          <button
            style={styles.logoutBtn}
            onClick={handleLogout}
            disabled={logoutLoading}
          >
            {logoutLoading ? (
              <>
                <span style={styles.spinner}></span>
                Logging out...
              </>
            ) : (
              "Log Out"
            )}
          </button>
        </div>

        {/* Main Content */}
        <div style={styles.content}>
          {renderContent()}
        </div>
      </div>

      {/* Modals */}
      {isEditingProfile && renderProfileEditModal()}
      {isEditingAddress && renderAddressEditModal()}
      {renderCancelModal()}

      {/* Add CSS animations */}
      <style>
        {`
          @keyframes modalSlideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Profile;