import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext'; // Assurez-vous que le chemin est correct
import useDebounce from '../hooks/useDebounce';
import { ThemeContext } from '../App';  // Utilisation du bon chemin relatif






const ProductSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { isDarkTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext); // Utiliser le LanguageContext pour obtenir la langue

  const placeholderText = language === 'fr' ? 'Rechercher un produit...' : 'Search for a product...';

  useEffect(() => {
    if (debouncedSearchTerm) {
      onSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, onSearch]);

  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholderText}
        className={`form-control ${isDarkTheme ? 'bg-dark text-light' : ''}`}
      />
    </div>
  );
};

export default ProductSearch;
