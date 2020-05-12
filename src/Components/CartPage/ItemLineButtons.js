import React from 'react';
import {addToCart,removeFromCart} from '../../action/Actions';
import { connect } from 'react-redux';
import styles from './ItemLineButtons.module.css'

function ItemLineButtons(props) {
    return (
        <div className={styles.buttonsContainer}>
            <button onClick={() => props.removeFromCart(props.item)} className={styles.button}>-</button>
            {props.pcs}
            {props.stockPcs ? <button onClick={() => props.addToCart(props.item)} className={styles.button}>+</button> : ''}         
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart : (item) => dispatch(addToCart(item)),
        removeFromCart: (item) => dispatch(removeFromCart(item))
    }
}

export default connect(null,mapDispatchToProps)(ItemLineButtons);