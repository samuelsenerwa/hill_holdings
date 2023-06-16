import React from "react";

import { images, data } from "../../constants";
import { SubHeading } from "../../components";
import './Clients.css';

const ClientCard = ({client: { imgUrl, title, subtitle } }) => (
    <div className="app__clients_card">
        <img src= {imgUrl} alt="clients"/>
        <div className="app__clients-card_content">
            <p className="p__cormorant" style={{ color: '#DCCA87'}}>{title}</p>
            <p className="p__cormorant">{subtitle}</p>
        </div>
    </div>
)


const Clients = () => (
    <div className="app__bg app__wrapper section__padding" id="clients">
        <div className="app__wrapper_info">
            <h1 className="headtext__cormorant">Our Clients</h1>

            <div className="app__clients_awards">
                {data.clients.map((client) => <ClientCard client={client} key={client.title} />)}
            </div>
        </div>
        <div className="app__wrapper_img">
            <img src= {images.construction} alt="service"/>
        </div>
    </div>
);

export default Clients;