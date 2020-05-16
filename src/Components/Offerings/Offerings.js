import React from 'react';
import styles from './Offerings.module.css'
import { connect } from 'react-redux';
import CarouselDots from './CarouselDots';
import ActualImage from './ActualImage';

class Offerings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            actualImg: '',
            timerId: null
        }

        this.id = 0;

        this.changeImgWDot = this.changeImgWDot.bind(this);
    }

    componentDidMount() {
        this.setState({ actualImg: this.props.imgs[0] })
        this.startTimer();

    }

    startTimer = () => {
        const timerId = setInterval(() => {
            this.setState({actualImg:this.props.imgs[this.id], timerId})
            this.id += 1;
            if(this.id===this.props.imgs.length) {
                this.id = 0;
            }
        }, 3000)
    }

    componentWillUnmount() {
        clearInterval(this.state.timerId);
    }

    changeImgWDot(index) {
        const img = this.props.imgs.find(i => i.index === index);

        this.setState({ actualImg: img })
    }

    render() {
        return (
            <div className={styles.OfferingsContainer}>
                <ActualImage src={this.state.actualImg} />
                <CarouselDots dots={this.props.imgs} actual={this.state.actualImg} changeImg={this.changeImgWDot} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        imgs: state.offerings
    }
}

export default connect(mapStateToProps)(Offerings)