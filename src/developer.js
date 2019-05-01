import React, { Component } from 'react'
import styled from 'styled-components';
import {ProductConsumer} from './context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';
import logo from './dev.jpg'

export default class developer extends Component {
  render() {
   return (
       <ModalContainer>
       <div className="container ">
    <div className="card align-left" style={{width: '18rem'}}>
    <img className="card-img-top" src={logo} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">About Developer</h5>
      <p className="card-text">Mebratu Kumera </p>
      <p>Software Engineer, AASTU</p>
      <p className="card-text">"It doesn't Matter where you are coming from ,
      all that realy matter is where you are going"</p>
      <a href="https://www.facebook.com/mebratu.kumera" className="btn btn-primary" target="_blank">follow me</a>
    </div>
  </div>   
</div>
</ModalContainer>
    )
  }
}
const ModalContainer=styled.div`
position:fixed;
font-family:italic;
left:40%;
height:200px;
top:200px;
display:flex;
align-items:center;
justify-content:center;

` 
