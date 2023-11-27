import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { Link,useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectUserRole, setUserRole, setUserId } from '../../common/rolesmanager';
import SearchBar from '../SearchPage/SearchBar ';



const Navbar = () => {
  const userRole = useSelector(selectUserRole);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handlingLogout = () => {
      dispatch(setUserRole('DEFAULT'));
      dispatch(setUserId(null));
      navigate('/');
  };
  return <AppBar>
    <Toolbar>
     <IconButton edge="start" color="inherit" aria-label="menu">
       <ShoppingCartIcon /></IconButton>
      <Typography variant="h6" style={{ flexGrow: 1 }}>upGrad E-Shop</Typography>
      
      {/* <InputBase placeholder="Search..." /> */}
     
      {userRole === 'DEFAULT' ? <>
                <Link to={{pathname:"/login", state: null}} style={{margin: 10, color: 'white'}} >
                        <Typography   variant="body1" color="inherit" component="div">
                        Login
                        </Typography>
                    </Link></> : <>
                        <button type="button" className ="btn btn-danger" onChange={handlingLogout}>Log out</button>
                    </>
                }
                    <Link to={{pathname:"/signup", state: null}} style={{margin: 10, color: 'white'}} >
                        <Typography   variant="body1" color="inherit" component="div">
                        SignUp
                        </Typography>
                    </Link>
       {userRole === 'ADMIN' ? <>
       <SearchBar/>
       <Link to={{pathname:"/", state: null}} style={{margin: 10, color: 'white'}} >
                        <Typography   variant="body1" color="inherit" component="div">
                            Home
                        </Typography>
                    </Link>
                    <Link to={{pathname:"/addproduct", state: null}} style={{margin: 10, color: 'white'}} >
                        <Typography   variant="body1" color="inherit" component="div">
                            Add Product
                        </Typography>
                    </Link>
                    
                </>: ``}
               
      {/* <Link to="/login"style={{ color:'white',
paddingRight:'20px'}} >Login</Link>
      <Link to="/signup" style={{color:'white'}}>SignUp</Link> */}
     
    </Toolbar>
    </AppBar>
  
  
}

export default Navbar





