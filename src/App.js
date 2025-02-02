import React, { useState, createContext } from 'react';
import ProductList from './components/ProductList';
import ProductSearch from './components/ProductSearch';
import ThemeToggle from './components/ThemeToggle';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

export const ThemeContext = createContext(); // Crée un ThemeContext

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <LanguageProvider>
      <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}> {/* Fournisseur du contexte */}
        <div className={`container ${isDarkTheme ? 'bg-dark text-light' : 'bg-light'}`}>
          <header className="my-4">
            <h1 className="text-center">
              <LanguageTitle /> {/* Appel du composant LanguageTitle */}
            </h1>
            <div className="d-flex justify-content-end gap-2">
              <ThemeToggle />
              <LanguageSelector /> {/* Appel du composant LanguageSelector */}
            </div>
          </header>
          <main>
            <ProductSearch />
            <ProductList />
          </main>
        </div>
      </ThemeContext.Provider>
    </LanguageProvider>
  );
};

// Définir le composant LanguageTitle
const LanguageTitle = () => {
  const { language } = useLanguage();
  return language === 'en' ? 'Product Catalogue' : 'Catalogue de Produits';
};

// Définir le composant LanguageSelector
const LanguageSelector = () => {
  const { language, switchLanguage } = useLanguage();
  return (
    <select value={language} onChange={(e) => switchLanguage(e.target.value)}>
      <option value="en">English</option>
      <option value="fr">Français</option>
    </select>
  );
};

export default App;
