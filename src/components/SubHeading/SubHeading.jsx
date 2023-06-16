import React from "react";

import { images } from '../../constants';


const SubHeading = ({title}) => (
    <div style={{marginBottom: '1rem'}}>
        <p className="p__cormorant" style={{color:'#000'}}>{title}</p>
    </div>
);

export default SubHeading;