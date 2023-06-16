import React from "react";

import { images } from "../../constants";
import { SubHeading } from "../../components";
import './Services.css';

const Services = () => (
    <div className="app__wrapper section__padding" id="services">
        <div className="app__wrapper_img app__wrapper_img-reverse">
            <img src={images.machinery4} alt="service_image"/>
        </div>

        <div className="app__wrapper_info">
            <SubHeading title="Our Services"/>
            <h1 className="headtext__cormorant">What We Offer</h1>

            <div className="app__service-content">
                <div className="app__service-content_quote">
                    <p className="p__opensans" style={{color:'#000'}}>Building Construction
We also pride ourselves of vast experience in the building
industry where we have constructed both high-rise and
low-rise residential buildings, commercial buildings and also
institutional buildings.</p>
                </div>
                <p className="p__opensans" style={{color:'#000'}}>Construction Project
Management
Hill Holdings Construction Limited also offers a wide range
of project management services which i nclude but not
limited to con struction project plan ning & management,
contract management, construction project supervisions and
site inspections.</p>
            </div>
        </div>
    </div>


);

export default Services;