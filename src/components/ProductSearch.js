import React, { useState, useContext } from "react";
import { ThemeContext } from "../App";

const ProductSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { isDarkTheme } = useContext(ThemeContext);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Envoyer la valeur au parent (App.js)
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Rechercher un produit..."
        className={`form-control ${isDarkTheme ? "bg-dark text-light" : ""}`}
      />
    </div>
  );
};

export default ProductSearch;
