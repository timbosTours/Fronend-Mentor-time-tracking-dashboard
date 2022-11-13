import React, {useState} from 'react'; 
import avatar from '../images/image-jeremy.png';
import data from '../data.json';




const User = () => {

    const [value, setValue] = useState(2)
    
    return (
        <div className="user">
            <img src={avatar} alt="" />
            <h1>Report for</h1>
            <h2>Jeremy Robson</h2>
            
            
            <form className='menu'>
                <button key={'daily'} onClick={() => { setValue(1) }} className='daily' >Daily</button>
                <button key={'weekly'} onClick={() => { setValue(2) }} className='weekly' >Weekly</button>
                <button key={'monthly'} onClick={() => { setValue(3) }} className='monthly'
                >Monthly</button>
            </form>
            {data.map(activityData => (
                <div key={activityData.title} className='content-box'>
                
                    <img className={`icon-${activityData.title.toLowerCase()}`} src={activityData.img} alt="" />
                    <h1>{activityData.title}</h1>
                    <ul>
                        {value === 1 ?
                            <h1>{activityData.timeframes.daily.current}hrs</h1> : null}
                        {value === 2 ? <h1>{activityData.timeframes.weekly.current}hrs</h1> : null}
                        {value === 3 ? <h1>{activityData.timeframes.monthly.current}hrs</h1> : null}
                </ul>
                </div>
            ))}
        </div>
    )
}

export default User
