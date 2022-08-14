import React from 'react';
import Dial from '../Dial/Dial';
import './display.css';


const Display = (props) => {
    return (
        <div style={{border:'2px solid green', margin:'5px',backgroundColor:'#ADD8E6'}}>
           <h2>Name:{props.name}</h2> 
           <p>So far steps today:{props.steps}</p>
           <Dial steps={props.steps}></Dial>
        </div>
    );
};

export default Display;