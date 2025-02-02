import React, { createContext, useState } from "react";
import ProductList from "./components/ProductList";
import ProductSearch from "./components/ProductSearch";
import ThemeToggle from "./components/ThemeToggle";

export const ThemeContext = createContext();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      <div className={`container ${isDarkTheme ? "bg-dark text-light" : "bg-light"}`}>
        <header className="my-4">
          <h1 className="text-center">Catalogue de Produits</h1>
          <ThemeToggle />
        </header>
        <ProductSearch onSearch={setSearchTerm} />
        <ProductList searchTerm={searchTerm} />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
