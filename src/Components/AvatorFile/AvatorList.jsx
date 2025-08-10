import React, { useEffect, useState } from "react";
import AvatarProfile from "./AvatorProfile";
import { searchAvailablePhotographers } from "../../api/photographersAPi";

const AvatarList = () => {
  const [photographers, setPhotographers] = useState([]);

  useEffect(() => {
    async function fetchPhotographers() {
      try {
        const res = await searchAvailablePhotographers({
          start_date: "2025-08-10",
          end_date: "2025-08-12",
          latitude: 31.5204,
          longitude: 74.3587,
        });

       
        const rawData = Object.values(res?.data || {});
consolelog("raw:",rawData)
        const formatted = rawData.map((item, index) => {
          const photographer = item.photographer || {};
          return {
            id: photographer.id || index,
            name: photographer.name || "No Name",
            subtitle: photographer.categories?.[0] || "Photographer",
            rating: photographer.average_rating || 0,
            reviews: photographer.total_reviews || 0,
            avatarIcon: photographer.avatar_url || null,
            latitude: item.latitude,
            longitude: item.longitude,
            start_date: item.start_date,
            end_date: item.end_date,
          };
        });

        setPhotographers(formatted);
      } catch (err) {
        console.error("Failed to fetch photographers:", err);
      }
    }

    fetchPhotographers();
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
      {photographers.length === 0 ? (
        <p>Loading photographers...</p>
      ) : (
        photographers.map((photographer) => (
          <AvatarProfile key={photographer.id} propsMap={photographer} />
        ))
      )}
    </div>
  );
};

export default AvatarList;
