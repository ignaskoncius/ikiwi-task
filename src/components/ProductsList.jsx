import React from 'react';
import css from './ProductsList.module.css';

function ProductsList({ newProductArray }) {
  return (
    <section className={css.listSection}>
      {newProductArray.map((p) => (
        <div className={css.listItem} key={p.id}>
          <p>Product: {p.title}</p>
          <p>Quantity: {p.quantity}</p>
          <p>Price: {p.price}$</p>
          <button className={css.listItemBtnEdit}>Edit</button>
          <button className={css.listItemBtnDelete}>Delete</button>
        </div>
      ))}
    </section>
  );
}

export default ProductsList;
