import React, { useEffect, useState } from "react";
import "./PGLContent.css";
import FindInput from "../../Components/FindInput/FindInput";
import SearchInput from "../../Components/SearchInput/SearchInput";
import LeftArrowIcon from "../../assets/icons/LeftArrowIcon";
import CrossIcon from "../../assets/icons/CrossIcon";
import AvatarProfile from "../../Components/AvatorFile/AvatorProfile";
import { searchAvailablePhotographers } from "../../api/photographersAPi";
import { useCategories } from "../../hooks/useCategories";

const PGLContent = ({ photographers = [], startDate, endDate, latitude, longitude }) => {
  const [allPhotographers, setAllPhotographers] = useState([]);
  const [filteredPhotographers, setFilteredPhotographers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { categories, loading } = useCategories();

  const formatData = (raw) => {
    return raw.map((item, index) => {
      const photographer = item.photographer || {};
      return {
        id: photographer.id || index,
        name: photographer.name || "No Name",
        category: photographer.categories?.[0] || "",
        subtitle: photographer.categories?.[0] || "Photographer",
        rating: photographer.average_rating || 0,
        reviews: photographer.total_reviews || 0,
        avatarIcon: photographer.avatar_url || null,
      };
    });
  };

  const fetchPhotographers = async () => {
    try {
      const res = await searchAvailablePhotographers({
        start_date: startDate,
        end_date: endDate,
        latitude,
        longitude,
      });
      const rawData = Array.isArray(res?.data) ? res.data : [];
      const formatted = formatData(rawData);
      setAllPhotographers(formatted);
      setFilteredPhotographers(formatted);
    } catch (error) {
      console.error(" Error fetching photographers:", error);
    }
  };

  useEffect(() => {
    if (photographers.length > 0) {
      const formatted = formatData(photographers);
      setAllPhotographers(formatted);
      setFilteredPhotographers(formatted);
    } else {
      fetchPhotographers();
    }
  }, []);

  useEffect(() => {
    let result = [...allPhotographers];
    if (searchTerm.trim()) {
      const s = searchTerm.trim().toLowerCase();
      result = result.filter((p) => p.name.toLowerCase().includes(s));
    }
    if (selectedCategory) {
      result = result.filter(
        (p) => p.category?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    setFilteredPhotographers(result);
  }, [searchTerm, selectedCategory, allPhotographers]);

  const handleClearCategory = () => {
    setSelectedCategory("");
  };

  return (
    <div className="pgl-wrapper">
      <div className="innerpart">
        <div className="innerinput">
          <FindInput
            placeholder="Northup Way"
            
            icon={LeftArrowIcon}
            rightIcon={() => <CrossIcon />}
            bordered
          />
        </div>

        <h1 className="pgl-heading">Photographers Lists</h1>
        <p className="pgl-description">
          Find the best photographers in your area for your next
        </p>
        <p  className="pgl-description-2"> event!</p>

        <div className="innerinput" style={{ position: "relative" }}>
          <SearchInput
            onNameSearch={setSearchTerm}
            onCategorySelect={setSelectedCategory}
            selectedCategory={selectedCategory}
            noAvatar={filteredPhotographers.length === 0}
            categories={categories}
            loading={loading}
            onClearCategory={handleClearCategory}
          />
        </div>

        <div className="avatar-list-container">
          {filteredPhotographers.length === 0 ? (
            <p>No photographers found.</p>
          ) : (
            filteredPhotographers.map((item) => (
              <AvatarProfile key={item.id} propsMap={item} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PGLContent;
