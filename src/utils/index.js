

// import { getApiWithAuth, postAPIWithAuth } from "../api/api";

// // 🔹 1. Search available photographers (with dynamic payload)
// export const searchAvailablePhotographers = async (payload) => {
//   const { start_date, end_date, latitude, longitude } = payload;

//   if (!start_date || !end_date || !latitude || !longitude) {
//     console.error("Missing required search parameters.");
//     return;
//   }

//   const queryParams = new URLSearchParams({
//     start_date,
//     end_date,
//     latitude,
//     longitude,
//   }).toString();

//   const url = `/customers/search_photographer?${queryParams}`;
//   return await getApiWithAuth(url);
// };

// // 🔹 2. Upload photographer avatar
// export const uploadPhotographerAvatar = async (formData) => {
//   const url = `/photographers/update_profile`;
//   return await postAPIWithAuth(url, formData, {
//     "Content-Type": "multipart/form-data",
//   });
// };

// // 🔹 3. Create photographer portfolio (photo/video)
// export const createPhotographerPortfolio = async (formData) => {
//   const url = `/photographers/portfolio`;
//   return await postAPIWithAuth(url, formData, {
//     "Content-Type": "multipart/form-data",
//   });
// };

// // 🔹 4. Create a new photographer package
// export const createPhotographerPackage = async (body) => {
//   const url = `/photographers/package`;
//   return await postAPIWithAuth(url, body);
// };

// // 🔹 5. Get photographer work (images/videos/reviews)
// export const getPhotographerWork = async (photographerId) => {
//   const url = `/photographers/work/${photographerId}`;
//   return await getApiWithAuth(url);
// };

// // 🔹 6. Get all packages by photographer
// export const getAllPhotographerPackages = async (photographerId) => {
//   const url = `/photographers/packages/${photographerId}`;
//   return await getApiWithAuth(url);
// };
