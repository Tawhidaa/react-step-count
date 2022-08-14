import React from 'react';
import './deviceDetail.css';

const DeviceDetail = (props) => {
    return (
        <div>
            <h1>Price:{props.price}</h1>
        </div>
    );
};

export default DeviceDetail;