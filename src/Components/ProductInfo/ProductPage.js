import React from 'react';
import { connect } from 'react-redux';
import ProductInfo from './ProductInfo';
import ImageGallery from './ImageGallery';
import FullSpecs from './FullSpecs';
import styles from './ProductPage.module.css'
import RecommendedProds from './RecommendedProds';

function ProductPage(props) {
    if(props.product) {
        return (
            <div className={styles.ProductPageContainer}>
                <ProductInfo />
                <ImageGallery />
                <FullSpecs />
                <RecommendedProds />
            </div>
        )
    }
    return <div>No product with this SKU!</div>
}

function mapStateToProps(state,props) {
    return {
        product : state.prodItems.find(item => (item.sku).toUpperCase() === (props.match.params.sku).toUpperCase())
    }
}

export default connect(mapStateToProps)(ProductPage)