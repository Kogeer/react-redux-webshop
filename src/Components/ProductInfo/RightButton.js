import React from 'react';
import styles from './MiniGallery.module.css';

export default function RightButton(props) {
    return <img src='/imgs/rightarrow.svg' alt="" className={styles.rightButton} onClick={() => props.shiftUp()}/>
}