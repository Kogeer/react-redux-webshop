import React from 'react';
import Logo from './Logo';
import HeaderCart from './HeaderCart';
import styles from './Header.module.css';

const items = [
    {
        name: 'Triola',
        pcs: 2,
        subtotal:300
    },
    {
        name: 'Kuklux Kex',
        pcs: 1,
        subtotal:100
    }
]

// const items = [];

export default function Header() {
    return(
        <div className={styles.Header}>
            <Logo />
            <div className={styles.HeaderLogo}>Webshop name</div>
            <HeaderCart items={items}/>
        </div>
    )
}