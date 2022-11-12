import React from 'react';
import data from '../data.json';


function Activity() {
    
    return (

    // filter the data to find work data then map the data inside work to JSX elements
            data.map(activityData => (
                <div key={activityData.title} className='content-box'>
                
                <img className={`icon-${activityData.title.toLowerCase()}`} src={activityData.img} alt="" />
                <h1>{activityData.title}</h1>
                    
            </div>
            ))
    )
}

export default Activity