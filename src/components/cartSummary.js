import React from 'react';
import { useSelector } from 'react-redux';
import { IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { selectCartItemsAndProduct } from '../redux/selectors/cartSelectors';

const CartSummary = () => {

  const { count, lastAddedProduct } = useSelector(state =>
    selectCartItemsAndProduct(state)
  );

  const badgeContent = isNaN(count) ? 0 : count;

  const handleCartClick = () => {
    console.log('Cart icon clicked');
    console.log('Last added product:', lastAddedProduct);
  };

  return (
    <IconButton
      size="large"
      aria-label="shopping cart"
      color="inherit"
      onClick={handleCartClick}
    >
      <Badge badgeContent={badgeContent} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default CartSummary;
