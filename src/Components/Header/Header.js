import React from 'react';
import Logo from './Logo';
import HeaderCart from './HeaderCart';
import styles from './Header.module.css';

const items = [
    {
        name: 'Triola',
        subtotal:300
    },
    {
        name: 'Kuklux Kex',
        subtotal:100
    }
]

export default function Header() {
    return(
        <div className={styles.Header}>
            <Logo />
            <h3>Webshop name</h3>
            <HeaderCart items={items}/>
        </div>
    )
}