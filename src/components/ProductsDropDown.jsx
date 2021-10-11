import React, { useState } from 'react';
import css from './ProductsDropDown.module.css';

function ProductsDropDown({
  products,
  onAddProduct,
  onShowDropDown,
  onGetCurrentProduct,
}) {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [valueInput, setValueInput] = useState('');
  const [showSaveBtn, setShowSaveBtn] = useState(false);
  const [productPrice, setProductPrice] = useState('');
  // setcurrent product (selected)

  const handleSelectChange = (e) => {
    setSelectedProduct(e.target.value);
    setShowSaveBtn(true);
  };

  const getProductPrice = () => {
    const price = products.find((p) => (p.title === selectedProduct).price);
    setProductPrice(price);
  };

  const handleInputValue = (e) => {
    setValueInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('submitting form');
    onAddProduct(selectedProduct, valueInput, productPrice);
    setSelectedProduct('');
    setValueInput('');
    setShowSaveBtn(false);
    onShowDropDown();
    getProductPrice();
  };

  return (
    <form className={css.addProductForm} onSubmit={handleFormSubmit}>
      <select value={selectedProduct} onChange={handleSelectChange}>
        <option disabled></option>
        {products.map((p) => (
          // value turetu buti id kad zinoti kuris item pasirinktas p.id (onGetCurrentProduct())
          <option required key={p.id} value={p.title}>
            {p.title} {p.price}
            {'$'}
          </option>
        ))}
      </select>
      <input
        type="number"
        required
        min="0"
        placeholder="Select product value"
        value={valueInput}
        onChange={handleInputValue}
      />
      {showSaveBtn ? <button className={css.saveBtn}>Save</button> : null}
    </form>
  );
}

export default ProductsDropDown;
