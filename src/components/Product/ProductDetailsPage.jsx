import React , { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Typography, Container, Box, TextField, Button,ToggleButton,ToggleButtonGroup } from '@mui/material';
import { useForm } from 'react-hook-form';
//import { useSelector } from 'react-redux';
//import { selectUserRole } from '../../common/role-manager';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ProductDetailsPage =() => {
    const navigate = useNavigate();
    const location = useLocation();
  const product = location.state.product;
  const [productcatgry, setProductcatgry] = useState(null);
  const { register, handleSubmit } = useForm();
 const [catgry] = useState('all');
 
 const proceedToCheckout = (quantity) => {
    let checkoutDetails = {
        'quantity': quantity,
        'product': product,
    }
   
        navigate('/checkout', { state: checkoutDetails });
}
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/products');
        
        setProductcatgry(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  const handleCategryChange = (_,newCategory) => {
    if(newCategory === 'All')
    setProductcatgry(productcatgry)
    else {
     
        setProductcatgry(productcatgry.filter(product => product.category === newCategory));
  }
};
  return (
    <div>
          <Container sx={{ marginTop: 10 }}>
    <ToggleButtonGroup sx ={{marginLeft:40}}
      color="primary"
      value={catgry}
      exclusive
      onChange={handleCategryChange}
     
      aria-label="Platform"
    >
      <ToggleButton value="All">All</ToggleButton>
                    <ToggleButton value="Apparel">Apparel</ToggleButton>
                    <ToggleButton value="Electronics">Electronics</ToggleButton>
                    <ToggleButton value="Furniture">Furniture</ToggleButton>
                    <ToggleButton value="Personal Care">Personal Care</ToggleButton>
    </ToggleButtonGroup>
    </Container>
    <Container sx={{ display: 'flex', maxWidth: '80%', marginTop: '8em' }}>
    <Box style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
        <img alt={product.name} className="image" style={{ width: '80%', height: '80%,', objectFit: 'cover' }}
            src={product.imageUrl} />
    </Box>
    <Box style={{ flex: 1, textAlign: 'justify', display: 'grid', placeContent: 'center' }}>
        <Typography style={{ marginBottom: 10 }}>
            <span style={{ fontWeight: 'bold', fontSize: 15, marginRight: 10 }}>{product.name}</span>
            <span style={{ backgroundColor: '#1976d2', padding: 10, borderRadius: 20, fontSize: 10,verticalAlign: 'text-bottom', color: 'white' }}>Available Quantity: {product.availableItems}</span>
        </Typography>
        <Typography style={{ marginBottom: 20 }}>
            <span>Catagory: <span style={{ fontWeight: 'bold',fontSize: 13 }}>{product.category}</span></span>
        </Typography>
        <Typography variant='body1' style={{ marginBottom: 20 }}>
            {product.description}
        </Typography>
        <Typography variant='h4' style={{ marginBottom: 20, color: 'red',fontSize: 18}}>
            ₹ {product.price}
        </Typography>
        <form onSubmit={handleSubmit(proceedToCheckout)}>
            <TextField margin="normal" required fullWidth id="productQuantity"  {...register('productQuantity')} 
                label="Enter Quantity" name="productQuantity" autoFocus sx={{ maxWidth: '50%' }} />
            <Box style={{ marginTop: 10 }}>
                <Button type="submit" variant="contained" >Place Order</Button>
            </Box>
        </form>
    </Box>
</Container>
</div>
  )
 
}

export default ProductDetailsPage