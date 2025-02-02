import React, { useState, useEffect } from 'react';
import useProductManager from '../hooks/useProductManager';  // Assure-toi du bon chemin relatif


const ProductList = () => {
  const { products, addProduct, removeProduct, updateProduct } = useProductManager();
  
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  useEffect(() => {
    // Exemple de récupération de produits avec pagination
    const fetchProducts = async () => {
      // Simule une API qui retourne des produits paginés
      const fetchedProducts = await fetch(`/api/products?page=${currentPage}&limit=${productsPerPage}`);
      const data = await fetchedProducts.json();
      addProduct(data);
    };

    fetchProducts();
  }, [currentPage, addProduct]);

  return (
    <div>
      <h2>Liste des produits</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.price}€
            <button onClick={() => removeProduct(product.id)}>Supprimer</button>
            <button onClick={() => updateProduct(product.id, 'Nouveau Nom', 50)}>Modifier</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setCurrentPage(currentPage + 1)}>Charger plus de produits</button>
    </div>
  );
};

export default ProductList;
