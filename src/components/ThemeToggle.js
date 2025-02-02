import React, { useContext } from 'react';

import { ThemeContext } from '../App';  // Utilisation du bon chemin relatif
import { LanguageContext } from '../context/LanguageContext';  // Chemin relatif correct




const ThemeToggle = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);
  
  return (
    <button
      onClick={() => setIsDarkTheme(!isDarkTheme)}
      className={`px-5 py-2 rounded ${
        isDarkTheme 
          ? 'bg-dark text-light border border-light' 
          : 'bg-light text-dark border border-dark'
      }`}
    >
      {isDarkTheme ? 'Mode Clair' : 'Mode Sombre'}
    </button>
  );
};

export default ThemeToggle;