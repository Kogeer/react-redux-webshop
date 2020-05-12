import React from 'react';
import styles from './Logo.module.css';
import {Link} from 'react-router-dom';

export default function Logo() {
    return(
        <div>
            <Link to="/">
            <img src="/imgs/github.svg" alt="no" className={styles.LogoImg}/>
            </Link>
            <div className={styles.LogoText}>Logo</div>
        </div>
    )
}