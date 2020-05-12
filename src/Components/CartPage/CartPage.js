import React from 'react';
import { connect } from 'react-redux';
import ItemLine from './ItemLine';
import styles from './CartPage.module.css'

function CartPage(props) {
    if(!props.cartItems.length) {
        return <div>Nincs termék a kosaradban!</div>
    }
    return (
        <div className={styles.cartPageContainer}>
            <h1>Your Cart</h1>
            <div className={styles.itemsContainer}>
            {
                props.cartItems.map((item,idx) => {
                    return <ItemLine item={item} key={idx}/>
                })
            }
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        cartItems: state.cartItems
    }
}

export default connect(mapStateToProps)(CartPage);