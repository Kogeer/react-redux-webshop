import React from 'react';
import styles from './ProdBox.module.css';
import Img from 'react-image';
import PrudoctButton from './ProductButton';

export default function ProdBox(props) {
    return (
        <div className={styles.ProdBox}>
            <div className={styles.ImgContainer}>
                <Img src={props.item.img} />
            </div>
            <div className={styles.DeatilsContainer}>
                <div className={styles.Details}>{props.item.name}</div>
                <div className={styles.Details}>{props.item.sku}</div>
                <div className={styles.Details}>{props.item.price}</div>
            </div>
            <div className={styles.ActionButtonsContainer}>
                <div >Remove button</div>
                <div >{props.inCart.pcs ? props.inCart.pcs : 0}</div>
                <div >{props.item.stock ? <PrudoctButton /> : <div>Out of stock</div>}</div>
            </div>
        </div>
    )
}