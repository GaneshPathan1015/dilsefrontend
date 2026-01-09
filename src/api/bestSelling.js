import axiosClient from "./axios";

export const fetchBestProducts = (categoryType, params = {}) => {
  return axiosClient.get(`api/best-selling-rings/${categoryType}`, {
    params
  });
};