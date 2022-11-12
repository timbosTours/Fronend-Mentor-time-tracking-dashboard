import React, { useState } from 'react'; 
import avatar from '../images/image-jeremy.png';
import data from '../data.json';



const User = () => {
    const [timeFrame, setTime] = useState()

    function setTimeframe(value) {
        setTime(()=>{
    if (value === 1) {
        console.log(`you clicked ${value}`)
        data.map((_data) => {
            return (
                <div>
                    <h1>{_data.timeframes.daily.current}</h1>
                    <h1>{_data.timeframes.daily.previous}</h1>
                </div>)
        })
    } else
        if (value === 2) {
            console.log(`you clicked ${value}`)
            data.map((_data) => {
                return (
                    <div>
                        <h1>{_data.timeframes.weekly.current}</h1>
                        <h1>{_data.timeframes.weekly.previous}</h1>
                    </div>
                )
            })
        } else
            if (value === 3) {
                console.log(`you clicked ${value}`)
                data.map((_data) => {
                    return (
                        <div>
                            <h1>{_data.timeframes.monthly.current}</h1>
                            <h1>{_data.timeframes.monthly.previous}</h1>
                        </div>
                    )
                })
                return timeFrame
            }})
}
    

    return (
        <div className="user">
            <img src={avatar} alt="" />
            <h1>Report for</h1>
            <h2>Jeremy Robson</h2>
            
            <form className='menu'>
                <button key={'daily'} onClick={() => { setTimeframe(1) }} className='daily' >Daily</button>
                <button key={'weekly'} onClick={() => { setTimeframe(2) }} className='weekly' >Weekly</button>
                <button key={'monthly'} onClick={() => { setTimeframe(3) }} className='monthly'
                >Monthly</button>
            </form>
            {data.map(activityData => (
                <div key={activityData.title} className='content-box'>
                
                    <img className={`icon-${activityData.title.toLowerCase()}`} src={activityData.img} alt="" />
                    <h1>{activityData.title}</h1>
                    <ul>
                        <li>{timeFrame}</li>
                </ul>
                </div>
            ))}
        </div>
    )
}

export default User
