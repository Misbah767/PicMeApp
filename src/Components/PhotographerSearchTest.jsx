import React from "react";
import { searchAvailablePhotographers } from "../api/photographersAPi";

export default function PhotographerSearchTest() {
  const handleSearch = async () => {
    try {
      console.log("Running searchAvailablePhotographers...");
      const result = await searchAvailablePhotographers({
        start_date: "2025-06-02",
        end_date: "2025-06-02",
        latitude: 29.780148267560097,
        longitude: -95.3657162519862,
      });
      

      console.log("Full API Response Object:", result);
      console.log("Photographers Found:", result?.data);

      if (!result.success) {
        console.warn("⚠️ API returned success: false");
      }
    } catch (error) {
      console.error(" API Error:", error);
      console.log(" Error message:", error.message);
      console.log(" Error response status:", error.response?.status);
      console.log(" Error response data:", error.response?.data);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Available Photographers (Test)</h2>
      <button onClick={handleSearch}>Run Test Search</button>
    </div>
  );
}
