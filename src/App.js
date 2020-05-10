import React from 'react';
import Header from './Components/Header/Header';
import Offerings from './Components/Offerings/Offerings';
import Products from './Components/Products/Products';
import Footer from './Components/Footer/Footer';

import styles from './App.module.css';
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Checkout from './Components/Checkout/Checkout';

export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>        
        <div className={styles.body}>
          <Header />          
        
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/">
            <Offerings />
            <Products />
          </Route>
        </Switch>

        <Footer />
        </div>
      </BrowserRouter>
    )
  }
}


