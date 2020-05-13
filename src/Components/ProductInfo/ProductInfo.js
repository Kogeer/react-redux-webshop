import React from 'react';
import styles from './ProductInfo.module.css'
import ProductButton from '../Products/ProductButton';
import { connect } from 'react-redux';

function ProductInfo(props) {
    return (
    <div className={styles.productInfoContainer}>
        <h3>{props.item.name} ({props.item.sku})</h3>
        <div>Stock information: {props.item.stock ? `${props.item.stock} on STOCK!` : 0}</div>
        <div>{props.item.description}</div>
        <div className={styles.addToCartButton}>
        {props.onStockItem.stock ? <ProductButton item={props.item}/> : 'Out of stock'}
        </div>
    </div>
    )
}

function mapStateToProps(state,props) {
    return {
        onStockItem: state.prodItems.find(item => item.name === props.item.name)
    }
}

export default connect(mapStateToProps)(ProductInfo);