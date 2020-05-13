import React from 'react';
import { connect } from 'react-redux';
import ItemLine from './ItemLine';
import styles from './CartPage.module.css'
import BottomCart from './BottomCart';

function CartPage(props) {
    if(!props.cartItems.length) {
        return <div>Nincs termék a kosaradban!</div>
    }
    const totalPrice = props.cartItems.reduce((accum,current) => accum+current.subtotal*current.pcs,0)
    return (
        <div className={styles.cartPageContainer}>
            <h1>Your Cart</h1>
            <div className={styles.itemsContainer}>
            {
                props.cartItems.map((item,idx) => {
                    return <ItemLine item={item} key={idx}/>
                })
            }
            <BottomCart totalPrice={totalPrice} items={props.cartItems} />
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