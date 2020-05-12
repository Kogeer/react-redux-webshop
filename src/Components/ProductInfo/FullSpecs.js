import React from 'react';
import styles from './FullSpecs.module.css'

export default function FullSpecs(props) {
    return <div className={styles.fullSpecsContainer}>{props.spec}</div>
}