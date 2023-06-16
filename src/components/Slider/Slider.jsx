import React from 'react';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { images } from "../../constants";
import './Slider.css';

const Slider = () => (
      <div className="carousel-wrapper">
            <Carousel showThumbs={false} autoPlay infiniteLoop={true} showStatus={false}>
          <div>
            <img src={images.machinery2} alt="Welcome image" />
            <div className="carousel-text">
              <h2 className='headtext__cormorant'>We provide engineering construction services</h2>
            </div>
          </div>
          <div>
            <img src={images.machinery3} alt="Service image" />
            <div className="carousel-text">
              <h2 className='headtext__cormorant'>We are committed to roviding the best possible construction expertise </h2>
            </div>
          </div>
          <div>
            <img src={images.machinery4} alt="Service image" />
            <div className="carousel-text">
              <h2 className='headtext__cormorant'>We provide service to ensure cost effective and successful projects.</h2>
            </div>
          </div>

          <div>
            <img src={images.machinery1} alt="Service image" />
            <div className="carousel-text">
              <h2 className='headtext__cormorant'>We Believe in and Promote Quality Delivery</h2>
            </div>
          </div>

          <div>
            <img src={images.construction} alt="Service image" />
            <div className="carousel-text">
              <h2 className='headtext__cormorant'>Building Construction</h2>
            </div>
          </div>

          <div>
            <img src={images.site} alt="Service image" />
            <div className="carousel-text">
              <h2 className='headtext__cormorant'>Construction Project Management</h2>
            </div>
          </div>
        </Carousel>
        <div className="swipe-button">
          <span className="arrow-down"></span>
        </div>
      </div>

);

export default Slider;