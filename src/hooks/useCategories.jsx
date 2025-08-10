import { useEffect, useState } from "react";
import { getGlobalCategories } from "../api/photographersAPi";


export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getGlobalCategories();
        console.log(" Raw API response:", response);

        
        const raw = response?.data?.data || [];
  console.log("..",raw)
        setCategories(raw);
      } catch (error) {
        console.error(" Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading };
};
