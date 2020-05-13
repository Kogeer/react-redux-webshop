import React from 'react';
import { emptyCart } from '../../action/Actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './BottomCart.module.css'

function BottomCartButtons(props) {
    return (
        <div className={styles.buttonsContainer}>
            <button onClick={() => props.emptyCart(props.items)}>Empty cart</button>
            <Link to='/checkout' >Checkout</Link>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        emptyCart: (items) => dispatch(emptyCart(items))
    }
}

export default connect(null, mapDispatchToProps)(BottomCartButtons);