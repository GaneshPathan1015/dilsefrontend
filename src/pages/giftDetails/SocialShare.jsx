import React from "react";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";

const SocialShare = ({ id, product, mainImage, backendBaseUrl }) => {
  if (!product) return null;

  const name = product.name || "Product";
  const firstImage = mainImage;

  // const shareUrl = `${backendBaseUrl.replace(/\/$/, "")}/products/${id}`;
  const shareUrl = `https://thecaratcasa.com/share/${id}`;

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedName = encodeURIComponent(name);
  const encodedImage = encodeURIComponent(firstImage);

  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedName}&url=${encodedUrl}`;
  const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodedImage}&description=${encodedName}`;

  const openPopup = (url) => {
    window.open(url, "_blank", "width=600,height=400");
  };

  return (
    <div className="social-share d-flex gap-2">
      <button className="btn p-0" onClick={() => openPopup(pinterestUrl)}>
        <FaPinterestP size={24} color="#E60023" />
      </button>
      <button
        className="btn p-0 fw-bold"
        onClick={() => openPopup(facebookUrl)}
      >
        <FaFacebookF size={24} color="#1877F2" />
      </button>
      <button className="btn p-0 fw-bold" onClick={() => openPopup(twitterUrl)}>
        <FaTwitter size={24} color="#1DA1F2" />
      </button>
    </div>
  );
};

export default SocialShare;
