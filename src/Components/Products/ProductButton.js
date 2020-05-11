import React from 'react';
import styles from './ProductButton.module.css';
import {addToCart,removeFromCart} from '../../action/Actions';
import { connect } from 'react-redux';

function PrudoctButton(props) {
    if(props.inCart) {
        return (
            <div className={styles.button} onClick={() => props.removeFromCart(props.item)}>Remove from cart</div>
        )
    }
    return(
        <div className={styles.button} onClick={() => props.addToCart(props.item)}>Add to cart</div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart : (item) => dispatch(addToCart(item)),
        removeFromCart: (item) => dispatch(removeFromCart(item))
    }
}

export default connect(null,mapDispatchToProps)(PrudoctButton);