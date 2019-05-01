import React, { Component } from 'react'
import './index.css';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import logo from './logo2.svg';
import cartlogo from './incart.svg';
import cart from './Cart';
import app from './App';
import styled from 'styled-components';

import {ButtonContainer} from './Button'
export default class Navbar extends Component {
  render() {
    return (

      <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
       <Link to="/">
         <img src={logo} alt="Walkon" className="navbar-brand"/>
       </Link>
       <ul className="navbar-nav align-items-center">
         <li className="nav-item ml-5">
           <Link to="/" className="nav-link">
           Products
           </Link>
         </li>
       </ul>
       <Link to="/Cart" className="ml-auto ">
        <ButtonContainer >
          <span className="mr-2">
           <img src={cartlogo} className="mycart" />
         {/*   <i className="fas fa-cart-plus" />  this can be settled before deploye*/} 
          </span>
        {/*   My Cart */}
        </ButtonContainer>
       </Link>
      </NavWrapper>
    
    )
  }
}

const NavWrapper = styled.nav`
   background: var(--mainBlue);
   .nav-link {
     color: var(--mainWhite)!important;
     fornt-size:1.3rem;
     text-transform:capitalize;
   }
`
