// src/context/LanguageContext.js
import React, { createContext, useState, useContext } from 'react';

// Création du contexte
const LanguageContext = createContext();

// Fournisseur de contexte
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Valeur par défaut : anglais

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook pour accéder au contexte
export const useLanguage = () => useContext(LanguageContext);
