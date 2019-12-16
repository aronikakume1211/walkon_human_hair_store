import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import Cart from './Cart';
import NotFound from './NotFound';
import Details from './Details';
import Navbar from './Navbar';
import Modal from './modal';
import Developer from './developer'
import {ProductProvider} from './context';
import Login from './Login';
import * as serviceWorker from './serviceWorker';

const humanhair=(
<ProductProvider>
<Router>
     <div>
     <Navbar />
     <Switch>
         <Route exact path="/" component={App} />
         <Route path="/Cart" component={Cart} />
         <Route path="/Details" component={Details} />
         <Route path="/developer" component={Developer} />
         <Route path="/login" component={Login} />
         <Route component={NotFound} />
     </Switch>
     
     <Modal />
     </div>
 </Router>
</ProductProvider>
 

)

ReactDOM.render(
    humanhair, document.getElementById('root'));

    if(module.hot){
        module.hot.accept();
    }
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
