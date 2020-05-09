import React from 'react';
import Header from './Components/Header/Header';
import Offerings from './Components/Offerings/Offerings';
import Products from './Components/Products/Products';
import Footer from './Components/Footer/Footer';

export default class App extends React.Component {

  render() {
    return(
      <div>
        <Header />
        <Offerings />
        <Products />
        <Footer />
      </div>
    )
  }
}


