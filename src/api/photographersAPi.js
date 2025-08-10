// utils/index.js
import { getApiWithAuth, postAPIWithAuth } from "./api";

// 1. Search available photographers
export const searchAvailablePhotographers = async ({ start_date, end_date, latitude, longitude }) => {
  const url = `/customers/search_photographer?start_date=${start_date}&end_date=${end_date}&latitude=${latitude}&longitude=${longitude}`;
  return await getApiWithAuth(url);
};


// 2. Get global categories
export const getGlobalCategories = async () => {
  return await getApiWithAuth("/customers/global_categories");
};

// 3. Search photographer by name
export const searchPhotographerByName = async (name) => {
  return await getApiWithAuth(`/customers/photographer_by_name?search=${name}`);
};

// 4. Search photographer by categories
export const searchPhotographerByCategory = async (categoriesArray) => {
  const searchParams = categoriesArray.map(cat => `search[]=${encodeURIComponent(cat)}`).join("&");
  return await getApiWithAuth(`/customers/photographer_by_category?${searchParams}`);
};

// 5. Get photographer work by ID
export const getPhotographerWork = async (photographerId) => {
  return await getApiWithAuth(`/photographers/${photographerId}`);
};

// 6. Get photographer by ID
export const getPhotographerById = async (id) => {
  return await getApiWithAuth(`/photographers/${id}`);
};

// 7. Upload avatar
export const uploadPhotographerAvatar = async (id, formData) => {
  return await postAPIWithAuth(`/photographers/${id}/upload-avatar`, formData);
};
