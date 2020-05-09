import React from 'react';
import HeaderCartDeatils from './HeaderCartDetails';
import styles from './HeaderCart.module.css'

export default function HeaderCart(props) {
    const totalPrice = props.items.reduce((init,curr) => init+curr.subtotal,0)
    if(props.items.length) {
        return (
            <div className={styles.HeaderShowDeatils}>
                <p >{totalPrice}</p>
                <p className={styles.HeaderCartDetails}><HeaderCartDeatils items={props.items} /></p>
            </div>
        )
    }

    return(
        <div>
            Car is empty
        </div>
    )
}