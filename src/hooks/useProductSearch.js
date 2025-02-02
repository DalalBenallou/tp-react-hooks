import { useState, useEffect } from "react";
import useDebounce from "./useDebounce"; // Import du hook personnalisé

const useProductSearch = (searchTerm) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const debouncedSearchTerm = useDebounce(searchTerm, 500); // Appliquer le debounce

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        // Simulation d'une API avec pagination
        const response = await fetch(`https://api.daaif.net/products?search=${debouncedSearchTerm}&page=${currentPage}&limit=${itemsPerPage}`);
        if (!response.ok) throw new Error("Erreur réseau");

        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [debouncedSearchTerm, currentPage]); // Dépendances : recherche + pagination

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const previousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return {
    products,
    loading,
    error,
    currentPage,
    nextPage,
    previousPage,
  };
};

export default useProductSearch;
