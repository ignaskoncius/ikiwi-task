import React, { useState } from 'react';
import ProductsDropDown from './ProductsDropDown';
import css from './AddProduct.module.css';

function AddProduct({ onAddProduct, products, onGetCurrentProduct }) {
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);

  const showDropDown = () => {
    setShowProductsDropdown(!showProductsDropdown);
  };

  return (
    <div className={css.addProductSection}>
      <button className={css.addProductBtn} onClick={showDropDown}>
        Add Product
      </button>
      {showProductsDropdown ? (
        <ProductsDropDown
          onGetCurrentProduct={onGetCurrentProduct}
          onAddProduct={onAddProduct}
          products={products}
          onShowDropDown={showDropDown}
        />
      ) : null}
    </div>
  );
}

export default AddProduct;
