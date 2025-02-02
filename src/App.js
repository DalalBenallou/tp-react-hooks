import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ProductSearch from './components/ProductSearch';
import ThemeToggle from './components/ThemeToggle';
import { LanguageProvider } from './contexts/LanguageContext'; // Importer le LanguageProvider

export const ThemeContext = createContext();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <LanguageProvider>  {/* Ajouter le LanguageProvider ici */}
      <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
        <div className={`container ${isDarkTheme ? 'bg-dark text-light' : 'bg-light'}`}>
          <header className="my-4">
            <h1 className="text-center">Catalogue de Produits</h1>
            <div className="d-flex justify-content-end gap-2">
              <ThemeToggle />
            </div>
          </header>
          <main>
            <ProductSearch onSearch={handleSearch} />
            <ProductList searchTerm={searchTerm} />
          </main>
        </div>
      </ThemeContext.Provider>
    </LanguageProvider>
  );
};
// Dans App.js, ajouter un bouton pour changer la langue
const { language, toggleLanguage } = useContext(LanguageContext);

return (
  <header className="my-4">
    <h1 className="text-center">Catalogue de Produits</h1>
    <div className="d-flex justify-content-end gap-2">
      <ThemeToggle />
      <button onClick={toggleLanguage}>
        {language === 'fr' ? 'Switch to English' : 'Passer au français'}
      </button>
    </div>
  </header>
);

export default App;
