import React from 'react';
import Header from './Components/Header/Header';
import Offerings from './Components/Offerings/Offerings';
import Products from './Components/Products/Products';
import Footer from './Components/Footer/Footer';
import ProductPage from './Components/ProductInfo/ProductPage'

import styles from './App.module.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Checkout from './Components/Checkout/Checkout';
import CartPage from './Components/CartPage/CartPage';
import { loadData } from './store/Store';

export default class App extends React.Component {

  async componentDidMount() {
    await loadData();
  }

  render() {
    return (
      <BrowserRouter>        
        <div className={styles.body}>
          <Header />          
        
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/product/:sku" component={ProductPage} />
          <Route path="/cartpage" component={CartPage} />
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


