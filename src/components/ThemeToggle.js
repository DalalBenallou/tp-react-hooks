import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { ThemeContext } from '../App'; // Assure-toi que le chemin est correct


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