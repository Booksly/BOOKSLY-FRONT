// CarouselItem.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselItem';


const CarouselItemComponent = ({ image, label, description }) => {
  return (
    <Carousel.Item interval={2000}>
      <div className="carousel-image" style={{ backgroundImage: `url(${image})` }}>
        <Carousel.Caption>
          <h3>{label}</h3>
          <p>{description}</p>
        </Carousel.Caption>
      </div>
    </Carousel.Item>
  );
}

export default CarouselItemComponent;
