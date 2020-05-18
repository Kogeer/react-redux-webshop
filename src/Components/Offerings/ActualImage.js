import React from 'react';
import styles from './ActualImage.module.css';
import {Link} from 'react-router-dom';

export default function ActualImage(props) {
    return (
        <div className={styles.imgcont} >
            <img src={props.src.img}  />
            <div className={styles.marketing}> {props.src.marketing} </div>
            <Link to={`/product/${props.src.sku}`} className={styles.prodLink}>Product</Link>
        </div>
    )
}