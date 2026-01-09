import React, { useState, useEffect } from "react";
import RingProductView from "./ring-product/RingProductView";
import EngagementTabs from "./ring-product/EngagementTabs";
import { useLocation, useParams } from "react-router-dom";
import axiosClient from "../../api/axios";
import ProductReviewSystem from "../review/ProductReviewSystem";

const EngagementDetails = () => {
  const location = useLocation();
  const { id } = useParams();
  const diamond = location.state?.diamond;

  const [product, setProduct] = useState(null);
  const [reviewsRefreshed, setReviewsRefreshed] = useState(0);

  useEffect(() => {
    if (id) {
      // Fetch product details from your API
      const fetchProduct = async () => {
        try {
          const response = await axiosClient.get(
            `/api/engagement-buildproduct/${id}`
          );

          if (response.data.success) {
            setProduct(response.data.data);
          } else {
            // Fallback if API fails
            setProduct({
              product: {
                id: id,
                average_rating: "4.5",
                review_count: "0",
                name: "Engagement Ring",
                description: "Beautiful engagement ring",
              },
            });
          }
        } catch (error) {
          console.error("Error fetching product:", error);
          // Fallback if API fails
          setProduct({
            product: {
              id: id,
              average_rating: "4.5",
              review_count: "0",
              name: "Engagement Ring",
              description: "Beautiful engagement ring",
            },
          });
        }
      };

      fetchProduct();
    }
  }, [id]);

  const handleReviewAdded = () => {
    setReviewsRefreshed((prev) => prev + 1);
  };

  return (
    <div className="container py-4">
      <EngagementTabs diamond={diamond} />
      <RingProductView diamond={diamond} />

      {/* Review System */}
      <ProductReviewSystem
        productId={product?.product?.id || id}
        refreshTrigger={reviewsRefreshed}
      />
    </div>
  );
};

export default EngagementDetails;
