// utils/photographer.js

// import { getApiWithAuth, postAPIWithAuth } from "./index";

// // 🔹 Search available photographers
// export const searchAvailablePhotographers = async ({ start_date, end_date, latitude, longitude }) => {
//   if (!start_date || !end_date || !latitude || !longitude) {
//     console.error(" Missing required search parameters.");
//     return { data: [], success: false };
//   }

//   const queryParams = new URLSearchParams({ start_date, end_date, latitude, longitude }).toString();
//   const url = `/customers/search_photographer?${queryParams}`;
//   return await getApiWithAuth(url);
// };
