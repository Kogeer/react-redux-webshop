import React from 'react';
import Img from 'react-image';
import { connect } from 'react-redux';
import styles from './ItemLine.module.css'
import ItemLineButtons from './ItemLineButtons';

function ItemLine(props) {
    return(
        <div className={styles.itemLineContainer}>
            <div><Img src={`http://localhost:3050${props.prodItem.imagePath}`} alt=""/></div>
            <div className={styles.itemName}>{props.item.name}</div>
            <ItemLineButtons pcs={props.item.pcs} item={props.item} stockPcs={props.prodItem.stock}/>
            <div>= {props.item.pcs*props.item.subtotal}</div>
        </div>
    )
}

function mapStateToProps(state,props) {
    return {
        prodItem: (state.prodItems.find(item => item.name === props.item.name) || {})
    }
}
export default connect(mapStateToProps)(ItemLine)
