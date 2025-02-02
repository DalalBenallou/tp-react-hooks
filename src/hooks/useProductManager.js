import { useState } from 'react';

const useProductManager = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const removeProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  const updateProduct = (productId, updatedName, updatedPrice) => {
    setProducts(
      products.map(product =>
        product.id === productId ? { ...product, name: updatedName, price: updatedPrice } : product
      )
    );
  };

  return { products, addProduct, removeProduct, updateProduct };
};

export default useProductManager;
