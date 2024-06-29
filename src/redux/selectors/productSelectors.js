// product selectors
export const productSelectors = state => state.products
export const selectProductById = (state, productId) => state.products.find(product => product.id === Number(productId))