import React from 'react';
import styles from './ImageGallery.module.css';
import MainImage from './MainImage';
import MiniGallery from './MiniGallery';

export default class ImageGallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [],
            main: {}
        }
    }

    async componentDidMount() {
        const imgPath = this.props.item.sku;
        const url = `http://localhost:3050/product/${imgPath}`;
        const fetchPicture = await fetch(url);
        const resp = await fetchPicture.json();
        const mainImage = (resp.imagesPath.find(img => img.isPrimary === 1) || {});
        this.setState({images:resp.imagesPath,main:mainImage})
    }

    render() {
        return (
            <div className={styles.imgGalleryContainer}>
                <MainImage img={this.state.main} />
                <div className={styles.miniContainer}>
                <MiniGallery imgs={this.state.images} />
                </div>
            </div>
        )
    }
}