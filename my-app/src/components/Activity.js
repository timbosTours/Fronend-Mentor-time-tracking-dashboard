import React from 'react'
import data from '../data.json'


// create a component to render different data sets
function Activity(props) {
    return (
        // map data to different elements
        data.map(activityData => (
                <div key={activityData.title} className='content-box'>
                    
                    <img className={`icon-${activityData.title.toLowerCase()}`} src={activityData.img} alt="" />
                    <h1 className='activity-title'>{activityData.title}</h1>
                <ul>
                    {/* use conditional rendering to render correct data timeframe based on button input(passed down as props from user component) */}
                        {props.value === 1 ?
                            <div>
                                <h1 className='hours'>{activityData.timeframes.daily.current}hrs</h1>
                                <h2 className='previous'>Yesterday - {activityData.timeframes.daily.previous}</h2>

                            </div>
                            : null}
                        {props.value === 2 ?
                            <div>
                                <h1 className='hours'>{activityData.timeframes.weekly.current}hrs</h1>
                                <h2 className='previous'>Last Week - {activityData.timeframes.daily.previous}</h2>
                            </div>
                            : null}
                        {props.value === 3 ?
                            <div>
                                <h1 className='hours'>{activityData.timeframes.monthly.current}hrs</h1>
                                <h2 className='previous'>Last Month - {activityData.timeframes.daily.previous}</h2>
                            </div>
                            : null}
                </ul>
                </div>
            )))}


export default Activity