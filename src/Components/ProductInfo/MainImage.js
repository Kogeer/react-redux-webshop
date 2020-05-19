import React from 'react';
import styles from './MainImage.module.css';

export default function MainImage(props) {
    return (
        <div className={styles.mainImage}>
            <img src={`http://localhost:3050${props.img.imagePath}`} alt=""  />
        </div>
    )
}