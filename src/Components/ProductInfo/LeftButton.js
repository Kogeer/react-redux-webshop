import React from 'react';
import styles from './MiniGallery.module.css';

export default function LeftButton(props) {
    return <img src='/imgs/leftarrow.svg' alt="" className={styles.leftButton} onClick={() => props.shiftDown()}/>
}