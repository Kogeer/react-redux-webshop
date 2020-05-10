import React from 'react';
import logo from '../Images/github.svg';
import styles from './Logo.module.css';

export default function Logo() {
    return(
        <div>
            <img src={logo} alt="no" className={styles.LogoImg}/>
            <div className={styles.LogoText}>Logo</div>
        </div>
    )
}