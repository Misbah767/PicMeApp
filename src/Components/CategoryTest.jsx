import React from "react";
import { useCategories } from "../hooks/useCategories"; //


export default function CategoryTest() {
  const { categories, loading, error } = useCategories();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ marginBottom: "1rem" }}>
      <h3> Categories:</h3>
      <ul>
      <ul>
  {(categories || []).map((cat) => (
    <li key={cat.id}>{cat.name}</li>
  ))}
</ul>

      </ul>
    </div>
  );
}
