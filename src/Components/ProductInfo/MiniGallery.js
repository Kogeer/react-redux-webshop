import React from 'react';
import styles from './MiniGallery.module.css';
import LeftButton from './LeftButton';
import RightButton from './RightButton';

export default class MiniGallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            minIndex: 0,
            maxIndex: 2
        }
    }

    shiftDown() {
        if(this.state.minIndex === 0) {
            this.setState({minIndex:this.props.imgs.length-3,maxIndex:this.props.imgs.length-1})
            return
        }
        this.setState( state => {
            return {
                ...state,
                minIndex: state.minIndex-1,
                maxIndex: state.maxIndex-1
            }
        })
    }

    shiftUp() {
        if(this.state.maxIndex === this.props.imgs.length-1) {
            this.setState({minIndex:0,maxIndex:2})
            return
        }
        this.setState( state => {
            return {
                ...state,
                minIndex: state.minIndex+1,
                maxIndex: state.maxIndex+1
            }
        })
    }

    render() {
        return(
            <div className={styles.miniContainer}>
                {this.props.imgs.length > 3 && <LeftButton shiftDown={() => this.shiftDown()}/>}
                {
                    this.props.imgs.map((img,idx) => {
                        if(idx <= this.state.maxIndex && idx >= this.state.minIndex)
                        return <img src={`http://localhost:3050${img.imagePath}`} alt="" key={idx}/>
                    })
                }
                {this.props.imgs.length > 3 && <RightButton shiftUp={() => this.shiftUp()}/>}
            </div>
        )
    }
}