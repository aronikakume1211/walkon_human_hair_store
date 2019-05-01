import React from 'react';
import './App.css';
import ProductList from './ProductList';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  
  return (
    <div className="container">
      <div className="row">
      <ProductList className="col-6"/>
      </div>
    </div>
  );
}

export default App;
