import React, { useEffect, useState } from 'react';
import './App.css';
import AddProduct from './components/AddProduct';
import ProductsList from './components/ProductsList';
import allProducts from './database/products';

function App() {
  const [products, setProducts] = useState([]);
  const [newProductArray, setNewProductArray] = useState([]);
  const [productId, setProductId] = useState(1);

  useEffect(() => {
    setProducts(allProducts());
  }, []);

  const getCurrentProduct = (id, title, quantity, price) => {
    console.log(id, title, quantity, price);
  };

  const handleAddProduct = (title, productQuantity) => {
    setNewProductArray([
      ...newProductArray,
      { id: `p_` + productId, title, quantity: productQuantity },
    ]);
    setProductId(productId + 1);
  };

  console.log(newProductArray);

  return (
    <div className="App">
      <h1>This is app to add products</h1>
      <AddProduct
        onAddProduct={handleAddProduct}
        products={products}
        onGetCurrentProduct={getCurrentProduct}
      />
      <ProductsList newProductArray={newProductArray} />
    </div>
  );
}

export default App;
