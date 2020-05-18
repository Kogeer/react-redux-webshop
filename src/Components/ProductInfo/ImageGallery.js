import React from 'react';
import styles from './ImageGallery.module.css';

export default class ImageGallery extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className={styles.imgGalleryContainer}>ImageGallery</div>
    }
}