import { useState, useEffect } from 'react';

const useProductManager = () => {
  const [products, setProducts] = useState([]);

  // Ajouter un produit
  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  // Supprimer un produit par son id
  const removeProduct = (productId) => {
    setProducts((prevProducts) => prevProducts.filter(product => product.id !== productId));
  };

  // Mettre à jour un produit
  const updateProduct = (updatedProduct) => {
    setProducts((prevProducts) => prevProducts.map(product =>
      product.id === updatedProduct.id ? updatedProduct : product
    ));
  };

  return {
    products,
    addProduct,
    removeProduct,
    updateProduct
  };
};

export default useProductManager;
