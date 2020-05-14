import React from 'react';
import { connect } from 'react-redux';
import CartSummary from './CartSummary';
import OrderForm from './OrderForm';
import styles from './Checkout.module.css';

function Checkout(props) {
    return (
        <div className={styles.checkoutPageContainer}>
            <h1>Checkout</h1>
            <div className={styles.itemsContainer}>
            <CartSummary items={props.cartItems} />
            <OrderForm items={props.cartItems} />
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        cartItems: state.cartItems
    }
}

export default connect(mapStateToProps)(Checkout)