import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../App';
import { LanguageContext } from '../contexts/LanguageContext'; // Import du LanguageContext
import useDebounce from '../hooks/useDebounce';

const ProductSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { isDarkTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext); // Utiliser le LanguageContext pour obtenir la langue

  // Texte du placeholder en fonction de la langue
  const placeholderText = language === 'fr' ? 'Rechercher un produit...' : 'Search for a product...';

  useEffect(() => {
    if (debouncedSearchTerm) {
      onSearch(debouncedSearchTerm);  // Appel de la fonction onSearch
    }
  }, [debouncedSearchTerm, onSearch]);

  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholderText}  // Afficher le texte du placeholder selon la langue
        className={`form-control ${isDarkTheme ? 'bg-dark text-light' : ''}`}
      />
    </div>
  );
};

export default ProductSearch;
