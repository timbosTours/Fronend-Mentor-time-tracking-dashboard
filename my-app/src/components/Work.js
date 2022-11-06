import React from 'react';
import data from '../data.json';
// import img from '../images/icon-work.svg'

function Work() {
    
        data.filter(_data => {
            if (_data.title === 'Work') {
                let workData = _data.timeframes;
                return workData
                
            }
            return (
                <div className='content-box'>
                    <h1>{workData}</h1>
                </div>)
        })
        
    }

export default Work