import React, { createContext, useState, useContext } from 'react';

// Création du contexte pour la langue
const LanguageContext = createContext();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false); // Exemple de gestion du thème

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      <div className={`app ${isDarkTheme ? 'dark' : ''}`}>
        {/* Ton contenu ici */}
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
