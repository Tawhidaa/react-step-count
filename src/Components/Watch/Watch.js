import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';
import './watch.css';

const Watch = () => {
    const [steps, setSteps] = useState(0);

const increaseSteps = () => {
const newStepsCount = steps + 1;
setSteps(newStepsCount);
}

useEffect( () =>{
    console.log(steps)
}, [steps])

    return (
        <div style={{border:'2px solid purple',  margin:'20px'}}>
           <h1> This is my Smart Watch</h1> 
           <h2>My current steps:{steps}</h2>
           <button onClick={increaseSteps}>Run....</button>
           <Display name='garmin' steps={steps}></Display>

        </div>
    );
};

export default Watch;