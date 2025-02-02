// src/components/LanguageSelector.js
import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <div>
      <select
        value={language}
        onChange={(e) => changeLanguage(e.target.value)}
        aria-label="Sélectionner la langue"
      >
        <option value="fr">Français</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
