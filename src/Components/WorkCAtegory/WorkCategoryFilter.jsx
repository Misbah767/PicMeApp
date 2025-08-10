import React from "react";

const WorkCategoryFilter = ({ selectedCategory, setSelectedCategory, categories }) => {
  return (
    <div style={{ textAlign: "center", marginBottom: "1rem" }}>
      <label style={{ marginRight: "8px" }}>Filter by Category:</label>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        style={{
          padding: "6px 10px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          fontSize: "14px",
        }}
      >
        <option value="">All</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default WorkCategoryFilter;
