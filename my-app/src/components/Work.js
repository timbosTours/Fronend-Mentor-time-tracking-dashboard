import React from 'react';
import data from '../data.json';
import img from '../images/icon-work.svg'

function Work() {
    return (
            data.filter(_data => _data.title === 'Work').map(workData => (
                <div className='content-box'>
                
                <img src={img} alt="" />
                <h1>{workData.title}</h1>
                <p>{workData.timeframes.daily.current}</p>
                <p>{workData.timeframes.weekly.previous}</p>
            </div>
            ))
    )
}

export default Work