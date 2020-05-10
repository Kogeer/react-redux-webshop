import React from 'react';
import styles from './Logo.module.css';

export default function Logo() {
    return(
        <div>
            <img src="/imgs/github.svg" alt="no" className={styles.LogoImg}/>
            <div className={styles.LogoText}>Logo</div>
        </div>
    )
}