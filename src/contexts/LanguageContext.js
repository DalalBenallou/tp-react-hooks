// src/contexts/LanguageContext.js
import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr'); // Par défaut en français

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'fr' ? 'en' : 'fr')); // Alterner entre français et anglais
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
