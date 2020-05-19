import React from 'react';
import styles from './MiniGallery.module.css';

export default class MiniGallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            minIndex: 0,
            maxIndex: 2
        }
    }

    render() {
        return(
            <div className={styles.miniContainer}>
                {
                    this.props.imgs.map((img,idx) => {
                        if(idx <= this.state.maxIndex && idx >= this.state.minIndex)
                        return <img src={`http://localhost:3050${img.imagePath}`} alt="" />
                    })
                }
            </div>
        )
    }
}