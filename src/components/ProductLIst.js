import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';

const ProductList = () => {

  const products = useSelector(state => state.products)
  // console.log(products)

  return (
    <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', m: '10px'}}>
      {products.map(product => (
        <Card key={product.id}>
          <CardMedia
            component="img"
            height="280"
            image={product.image}
            alt={product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Typography variant="body1" color="text.primary">
              ${product.price}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default ProductList;