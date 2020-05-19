import React from 'react';
import styles from './CarouselDots.module.css'

export default function CarouselDots(props) {
    return (
        <div className={styles.dotsContainer}>
            {
                props.dots.map((i,idx) => {
                    if(i.img === props.actual.img) {
                        return <span className={styles.actualDot} key={idx} onClick={() => props.changeImg(i.index)}></span>
                    }
                    return <span className={styles.dot} key={idx} onClick={() => props.changeImg(i.index)}></span>
                })
            }
        </div>
    )
}