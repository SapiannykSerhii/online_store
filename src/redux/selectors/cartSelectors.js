// export const selectCartItemsAndProduct = state => {
//   const { cart } = state;
//   const count = cart.reduce((totalCount, product) => totalCount + product.quantity, 0);
//   const lastAddedProduct = cart.length > 0 ? cart[cart.length - 1] : null;
//   return {
//     count,
//     lastAddedProduct
//   };
// };
import { createSelector } from "reselect";

export const selectCartItemsAndProduct = createSelector(
  state => state.cart,
  (cart) => {
    const count = cart.reduce((totalCount, product) => totalCount + product.quantity, 0);
    const lastAddedProduct = cart.length > 0 ? cart[cart.length - 1] : null;
    return { count, lastAddedProduct };
  }
);