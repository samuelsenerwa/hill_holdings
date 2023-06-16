import React from "react";

import { Slider } from "../../components";
import { images } from "../../constants";
import './Header.css';

const Header = () => (
    <>
    <div className="carousel-container">
        <Slider />
    </div>
    <div className="app__header app__wrapper section__padding">
            <div className="app__wrapper_info">
                <h1 className="app__header-h1"> Hill Holdings Construction Limited</h1>
                <p className="p__opensans" style={{ margin: '2rem 0', color: '#000' }}>Hill Holdings Construction Limited is a Kenyan Incorporated company and locally owned. The company offers Engineering Construction and Construction Project management. Hill Holdings Construction Limited is dedicated to organizations or Individuals seeking construction services.</p>
                <button type="button" className="custom__button">Explore Services</button>
            </div>
            <div className="app__wrapper_img">
                <img src={images.machinery1} alt="Welcome image" />
            </div>
        </div>
        </> 
);

export default Header;