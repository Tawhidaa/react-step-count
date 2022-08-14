import React from 'react';
import './dial.css';
const Dial = (props) => {
    return (
        <div style={{border:'2px solid blue',margin:'5px',backgroundColor:'white'}}>
           <h3>This is Dial</h3> 
           <p>Steps so far: {props.steps}</p>
        </div>
    );
};

export default Dial;