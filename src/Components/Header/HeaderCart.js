import React from 'react';
import HeaderCartDeatils from './HeaderCartDetails';
import styles from './HeaderCart.module.css'
import { Link } from 'react-router-dom';

export default function HeaderCart(props) {
    const totalPrice = props.items.reduce((init,curr) => init+curr.subtotal*curr.pcs,0)
    if(props.items.length) {
        return (
            <Link to="/cartpage" className={styles.Cart}>
                <div >Total: {totalPrice}</div>
                <div className={styles.HeaderCartDetails}><HeaderCartDeatils items={props.items} /></div>
            </Link>
        )
    }

    return(
        <div className={styles.Cart}>
            Cart is empty
        </div>
    )
}