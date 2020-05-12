import React from 'react';
import styles from './ProductInfo.module.css'
import ProductButton from '../Products/ProductButton';

export default function ProductInfo(props) {
    return (
    <div className={styles.productInfoContainer}>
        <h3>{props.item.name} ({props.item.sku})</h3>
        <div>Stock information: {props.item.stock ? `${props.item.stock} on STOCK!` : 0}</div>
        <div>{props.item.description}</div>
        <div className={styles.addToCartButton}>
        <ProductButton item={props.item}/>
        </div>
    </div>
    )
}