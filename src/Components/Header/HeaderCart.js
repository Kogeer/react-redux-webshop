import React from 'react';
import HeaderCartDeatils from './HeaderCartDetails';
import styles from './HeaderCart.module.css'
import { Link } from 'react-router-dom';

export default function HeaderCart(props) {
    const totalPrice = props.items.reduce((init,curr) => init+curr.subtotal,0)
    if(props.items.length) {
        return (
            <Link to="/checkout" className={styles.Cart}>
                <p >Total: {totalPrice}</p>
                <p className={styles.HeaderCartDetails}><HeaderCartDeatils items={props.items} /></p>
            </Link>
        )
    }

    return(
        <div className={styles.Cart}>
            Car is empty
        </div>
    )
}