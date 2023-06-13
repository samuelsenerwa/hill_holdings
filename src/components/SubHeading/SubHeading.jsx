import React from "react";

import { images } from '../../constants';


const SubHeading = ({title}) => (
    <div style={{marginBottom: '1rem'}}>
        <p style={{ color:'#000'}}className="p__cormorant">{title}</p>
    </div>
);

export default SubHeading;