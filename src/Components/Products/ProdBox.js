import React from 'react';
import styles from './ProdBox.module.css';

export default function ProdBox(props) {
    return(
        <div className={styles.ProdBox}>{props.item.name}</div>
    )
}