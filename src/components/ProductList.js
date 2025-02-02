import React, { useState } from 'react';
import useProductManager from './hooks/useProductManager';

const ProductList = () => {
  const { products, addProduct, removeProduct, updateProduct } = useProductManager();
  
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');

  // Fonction pour ajouter un produit
  const handleAddProduct = () => {
    if (!newProductName || !newProductPrice) return;
    
    const newProduct = { 
      id: Date.now(), 
      name: newProductName, 
      price: parseFloat(newProductPrice) 
    };
    addProduct(newProduct);
    
    // Réinitialisation des champs
    setNewProductName('');
    setNewProductPrice('');
  };

  // Fonction pour supprimer un produit par son id
  const handleRemoveProduct = (productId) => {
    removeProduct(productId);
  };

  // Fonction pour mettre à jour un produit
  const handleUpdateProduct = (productId) => {
    const updatedProduct = { id: productId, name: 'Produit Mis à Jour', price: 25 };
    updateProduct(updatedProduct);
  };

  return (
    <div>
      <h2>Liste des produits</h2>

      {/* Formulaire d'ajout de produit */}
      <div>
        <input
          type="text"
          placeholder="Nom du produit"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Prix du produit"
          value={newProductPrice}
          onChange={(e) => setNewProductPrice(e.target.value)}
        />
        <button onClick={handleAddProduct}>Ajouter un produit</button>
      </div>

      {/* Affichage des produits */}
      <ul>
        {products.length === 0 ? (
          <p>Aucun produit disponible.</p>
        ) : (
          products.map((product) => (
            <li key={product.id}>
              <strong>{product.name}</strong> - {product.price}€
              <button onClick={() => handleUpdateProduct(product.id)}>Modifier</button>
              <button onClick={() => handleRemoveProduct(product.id)}>Supprimer</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ProductList;
