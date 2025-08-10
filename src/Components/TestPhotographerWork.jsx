// src/pages/TestPhotographerWork.jsx
import React, { useEffect, useState } from "react";
import { searchAvailablePhotographers } from "../api/photographersAPi"; 
// ya jahan aapka file ho wahan se import karen


const TestPhotographerWork = () => {
  const [workData, setWorkData] = useState(null);
  const [loading, setLoading] = useState(true);
  const photographerId = "140"; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await searchAvailablePhotographers(photographerId);
        console.log("Photographer Work Response..:", response);
        setWorkData(response);
      } catch (error) {
        console.error("Error fetching photographer work:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading photographer work...</p>;

  if (!workData) return <p>No data found.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Photographer: {workData.name}</h2>
      <p>Email: {workData.email}</p>
      <h3>Portfolio:</h3>
      <ul>
        {workData.portfolio?.map((item, index) => (
          <li key={index}>
            <img src={item.imageUrl} alt={item.title} width="150" />
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestPhotographerWork;
