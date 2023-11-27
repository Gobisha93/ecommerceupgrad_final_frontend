import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Navbar from './components/Navigation/Navbar';
import LoginPage from './components/Header/LoginPage';
import Home from './components/Home';
import SignUpPage from './components/Header/SignUpPage';
import UserPage from './components/UserPage';
import ProductsPage from './components/Product/ProductsPage';
import { Provider } from 'react-redux';
import { Roles } from './common/rolesstore';
import AddProduct from './components/Product/AddProduct';
import ProductDetailsPage from './components/Product/ProductDetailsPage';
import CheckoutPage from './components/Order/CheckoutPage';
import ModifyProduct from './components/Product/ModifyProductPage';

function App() {
  return    <Provider store={Roles}>
  <Router>
      <Navbar />
      
      <Routes>
      <Route exact path='/' element={< Home />}></Route>
      <Route exact path='/login' element={< LoginPage />}></Route>
      <Route exact path='/signup' element={< SignUpPage />}></Route>
      <Route exact path='/products' element={< ProductsPage />}></Route>
      <Route exact path='/addproduct' element={< AddProduct />}></Route>
      <Route exact path='/userpage' element={< UserPage />}></Route>
      <Route exact path='/productDetails' element={< ProductDetailsPage />}></Route>
      <Route exact path='/checkout' element={< CheckoutPage />}></Route>
      <Route exact path='/modifyProduct' element={< ModifyProduct />}></Route>
      <Route path="*" element={<Navigate to="/" />} />
      
      </Routes>
      
    </Router>
    </Provider> 
    
    
  
};

export default App;
