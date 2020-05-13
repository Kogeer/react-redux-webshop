import React from 'react';
import { emptyCart } from '../../action/Actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './BottomCart.module.css'

function BottomCartButtons(props) {
    return (
        <div className={styles.buttonsContainer}>
            <button onClick={() => props.emptyCart(props.items)} className={styles.button}>Empty cart</button>
            <Link to='/checkout' className={styles.linkButton}>Checkout</Link>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        emptyCart: (items) => dispatch(emptyCart(items))
    }
}

export default connect(null, mapDispatchToProps)(BottomCartButtons);