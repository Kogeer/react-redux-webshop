import React from 'react';
import styles from './ErrorInputs.module.css';

export default function ErrorInputs(props) {
    return(
        <div className={styles.errorContainer}>
            {
                props.error.map((error,idx) => {
                    return <div key={idx}>{error}!</div>
                })
            }
        </div>
    )
}