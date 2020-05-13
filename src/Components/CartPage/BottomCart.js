import React from 'react';
import BottomCartButtons from './BottomCartButtons';
import styles from './BottomCart.module.css';

export default function BottomCart(props) {
    return (
        <div className={styles.bottomCartContainer}>
            <div className={styles.totalPrice}>Total {props.totalPrice}</div>
            <BottomCartButtons items={props.items} />
        </div>
    )
}