import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: {product.price} PLN</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductItem;