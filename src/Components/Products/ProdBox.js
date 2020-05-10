import React from 'react';
import styles from './ProdBox.module.css';
import Img from 'react-image';

export default function ProdBox(props) {
    return(
        <div className={styles.ProdBox}>
            <div className={styles.ImgContainer}>
            <Img src={props.item.img} />
            </div>
            <div className={styles.DeatilsContainer}>
                <div className={styles.Details}>{props.item.name}</div>
            <div className={styles.Details}>{props.item.sku}</div>
            <div className={styles.Details}>{props.item.price}</div>
            </div>
        </div>
    )
}