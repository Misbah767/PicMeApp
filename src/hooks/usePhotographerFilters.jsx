// // src/hooks/usePhotographerFilters.js
// import { useEffect, useState } from "react";

// const usePhotographerFilters = (allPhotographers) => {
//   const [filteredPhotographers, setFilteredPhotographers] = useState([]);

//   const filterByCategory = (category) => {
//     const updated = allPhotographers?.filter((item) => {
//       const photographer = item?.photographer || item;
//       return photographer?.category === category;
//     });
//     setFilteredPhotographers(updated);
//   };

//   const filterByName = (name) => {
//     const updated = allPhotographers?.filter((item) => {
//       const photographer = item?.photographer || item;
//       return photographer?.name?.toLowerCase().includes(name.toLowerCase());
//     });
//     setFilteredPhotographers(updated);
//   };

//   useEffect(() => {
//     if (Array.isArray(allPhotographers)) {
//       setFilteredPhotographers(allPhotographers);
//     }
//   }, [allPhotographers]);

//   return {
//     filteredPhotographers,
//     filterByCategory,
//     filterByName,
//   };
// };

// export default usePhotographerFilters;
