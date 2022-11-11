import React from 'react';
import data from '../data.json';
// import img from '../images/icon-work.svg';


function Activity() {
    
    return (

    // filter the data to find work data then map the data inside work to JSX elements
            data.filter(_data => _data.title === _data.title).map(activityData => (
                <div className='content-box'>
                
                <img className={`icon-${activityData.title.toLowerCase()}`} src={activityData.img} alt="" />
                <h1>{activityData.title}</h1>
                <p>{activityData.daily}</p>
                    <p>{activityData.timeframes.weekly.previous}</p>
                    
            </div>
            ))
    )
}

export default Activity