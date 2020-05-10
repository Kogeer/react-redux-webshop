import React from 'react';
import { connect } from 'react-redux';
import ProdBox from './ProdBox';
import styles from './Products.module.css'

function Products(props) {
    return(
        <div className={styles.ProductsGridContainer}>
            {
                props.prodItems.map(item=> {
                    return <ProdBox item={item} />
                })
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        prodItems: state.prodItems
    }
}

export default connect(mapStateToProps)(Products);