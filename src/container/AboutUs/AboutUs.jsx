import React from "react";
import { images } from "../../constants";

import './AboutUs.css';

const AboutUs = () => (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
        <div className="app__aboutus-overlay flex__center">
        </div>
        <div className="app__aboutus-content flex__center">
            <div className="app__aboutus-content_about">
                <h1 className="headtext__cormorant">About Us</h1>
                <p className="p__opensans">We are committed to providing the best possible construction expertise & service to ensure cost effective and successful projects. We work closely with our clients to accurately interpret their dreams/visions in drawings and bring them to the desired reality through construction solutions to meet their needs; We communicate with our clients throughout the construction process to keep them informed of progress and to ensure that our project keeps on schedule and within budget.</p> 
                <button type="button" className="custom__button">Know More</button>
            </div>

            <div className="app__aboutus-content_space flex__center">
                
            </div>
        <div className="app__aboutus-content_vision">
            <h1 className="headtext__cormorant">Our Vision</h1>
            <p className="p__opensans">A regional market leader in provision of civil engineering and building construction services</p>
            <button type="button" className="custom__button">Know More</button>
        </div>
    </div>
    </div>
)

export default AboutUs;