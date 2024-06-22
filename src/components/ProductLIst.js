import React from 'react';
import ProductItem from './ProductItem';
import { useSelector } from 'react-redux';

const ProductList = () => {
  const products = useSelector((state) => state.products.items)

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
