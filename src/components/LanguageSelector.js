// src/components/LanguageSelector.js
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSelector = () => {
  const { language, switchLanguage } = useLanguage();

  return (
    <div>
      <select value={language} onChange={(e) => switchLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="fr">Français</option>
        {/* Ajoute d'autres langues si nécessaire */}
      </select>
    </div>
  );
};

export default LanguageSelector;
