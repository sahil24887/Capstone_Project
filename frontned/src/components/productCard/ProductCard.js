import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ActionAreaCard({ product }) {
  return (
    <Card sx={{ width: '100%', maxWidth: '50%', height: 'auto', margin: 1, boxShadow: '3px 4px 0px grey' }}>
      <CardActionArea>
        <CardMedia component="img" sx={{ width: '100%', height: '150px' }} image={product.url} alt={product.productName} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.productName}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ backgroundColor: 'white' }}>
            <span style={{ backgroundColor: 'white' }}>Processing fee: {product.annualFee} Interest Rate: {product.interestRate}</span>
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ backgroundColor: 'white' }}>
            <Link to="/apply">Apply</Link>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
