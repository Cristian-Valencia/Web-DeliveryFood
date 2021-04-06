import React from 'react';
import styles from './Carousel.module.css';
import { Carousel } from 'react-bootstrap';
import sushi from '../../../assets/images/carouselImages/japanese.jpg';
import chinese from '../../../assets/images/carouselImages/chinese.jpg';
import italian from '../../../assets/images/carouselImages/italian.jpg';


const CarouselComponent = () => {
    return (
        <div className={styles.carouselContainer}>
            <Carousel nextLabel="" prevLabel="">
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src={sushi}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src={chinese}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src={italian}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselComponent;
