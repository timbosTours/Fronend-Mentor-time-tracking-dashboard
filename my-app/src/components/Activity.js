import React from 'react'
import data from '../data.json'


// create a component to render different data sets
function Activity(props) {
    return (
        // map data to different elements
        data.map(activityData => (
                <div key={activityData.title} className='content-box'>
                    
                <img className={`icon icon-${activityData.title.toLowerCase()} `} src={activityData.img} alt="" />
                <div className='activity-data'>
                    <div className='title-dots'>
                    <h1 className='activity-title'>{activityData.title}</h1>
                    <div className='dots'>
                        <span className='dot'>.</span>
                        <span className='dot'>.</span>
                        <span className='dot'>.</span>
                        </div>
                    </div>
                <ul>
                    {/* use conditional rendering to render correct data timeframe based on button input(passed down as props from user component) */}
                        {props.value === 1 ?
                            <div  className='activity-times'>
                                <h1 className='hours'>{activityData.timeframes.daily.current}hrs</h1>
                                <h2 className='previous'>Yesterday - {activityData.timeframes.daily.previous}</h2>

                            </div>
                            : null}
                        {props.value === 2 ?
                            <div  className='activity-times'>
                                <h1 className='hours'>{activityData.timeframes.weekly.current}hrs</h1>
                                <h2 className='previous'>Last Week - {activityData.timeframes.daily.previous}</h2>
                            </div>
                            : null}
                        {props.value === 3 ?
                            <div  className='activity-times'>
                                <h1 className='hours'>{activityData.timeframes.monthly.current}hrs</h1>
                                <h2 className='previous'>Last Month - {activityData.timeframes.daily.previous}</h2>
                            </div>
                            : null}
                    </ul>
                </div>
                </div>
            )))}


export default Activity