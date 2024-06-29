import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import { productSelectors } from "../redux/selectors/productSelectors";
import { Link } from "react-router-dom";

const ProductList = () => {

  const products = useSelector(productSelectors)
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
            <Button
              component={Link}
              to={`/product/${product.id}`}
              variant="contained"
              color="primary"
              sx={{ mt : 2}}
            >
            View Details
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default ProductList;