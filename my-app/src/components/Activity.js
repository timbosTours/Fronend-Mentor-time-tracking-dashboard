import React from 'react'
import data from '../data.json'

function Activity(props) {
    return (
        data.map(activityData => (
                <div key={activityData.title} className='content-box'>
                
                    <img className={`icon-${activityData.title.toLowerCase()}`} src={activityData.img} alt="" />
                    <h1>{activityData.title}</h1>
                    <ul>
                        {props.value === 1 ?
                            <div>
                                <h1>{activityData.timeframes.daily.current}hrs</h1>
                                <h2>Yesterday - {activityData.timeframes.daily.previous}</h2>

                            </div>
                            : null}
                        {props.value === 2 ?
                            <div>
                                <h1>{activityData.timeframes.weekly.current}hrs</h1>
                                <h2>Last Week - {activityData.timeframes.daily.previous}</h2>
                            </div>
                            : null}
                        {props.value === 3 ?
                            <div>
                                <h1>{activityData.timeframes.monthly.current}hrs</h1>
                                <h2>Last Month - {activityData.timeframes.daily.previous}</h2>
                            </div>
                            : null}
                </ul>
                </div>
            )))}


export default Activity