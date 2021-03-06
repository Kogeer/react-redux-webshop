import React from 'react';
import styles from './ProdBox.module.css';
import Img from 'react-image';
import PrudoctButton from './ProductButton';
import { Link } from 'react-router-dom';

export default function ProdBox(props) {
    return (
        <div className={styles.ProdBox}>
            <div className={styles.ImgContainer}>
                <Link to={`/product/${props.item.sku}`}>
                    <Img src={`http://localhost:3050${props.item.imagePath}`} />
                </Link>
            </div>
            <div className={styles.DeatilsContainer}>
                <div className={styles.Details}>{props.item.name}</div>
                <div className={styles.Details}>{props.item.sku}</div>
                <div className={styles.Details}>{props.item.price}</div>
            </div>
            <div className={styles.ActionButtonsContainer}>
                <div >{props.inCart.pcs ? <PrudoctButton item={props.item} inCart={props.inCart.pcs} /> : ''}</div>
                <div >{props.inCart.pcs ? props.inCart.pcs : 0}</div>
                <div >{props.item.stock ? <PrudoctButton item={props.item} /> : <div>Out of stock</div>}</div>
            </div>
        </div>
    )
}