import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectProductById } from "../redux/selectors/productSelectors";
import { Box, Button, Typography } from "@mui/material";
import { addToCart } from "../redux/reducers/cartReducer";
import { addToSaved } from "../redux/reducers/savedReducer";

const SinglePost = () => {
  const { productId } = useParams()
  const product = useSelector(state => selectProductById(state, productId))
  const dispatch = useDispatch()

  if (!product) {
    return <Typography variant="h5">Product not found</Typography>
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  const handleAddToSaved = () => {
    dispatch(addToSaved(product))
  }
  return (
    <Box sx={{ padding: 2, margin: 'auto', textAlign: 'center'}}>
      <Typography variant="h4">{product.name}</Typography>
      <img src={product.image} alt={product.name} style={{ maxWidth: '50%', height: 'auto' }} />
      <Typography variant="body1">{product.description}</Typography>
      <Typography variant="h6">${product.price}</Typography>
      <Button variant="contained" color="primary" onClick={handleAddToSaved} sx={{ mt: 2 }}>Add to Save</Button>
      <Button variant="contained" color="secondary" onClick={handleAddToCart} sx={{ mt: 2, ml: 2 }}>Add to Cart</Button>
    </Box>
  )
}

export default SinglePost