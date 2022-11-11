import React from 'react';
import avatar from '../images/image-jeremy.png';
import data from '../data.json';
import Activity from './Activity';




const User = () => {

    return (
        <div className="user">
        <img src={avatar} alt="" />
        <h1>Report for</h1>
            <h2>Jeremy Robson</h2>
            
            <title>
                <button className='daily' >Daily</button>
                <button className='weekly' >Weekly</button>
                <button className='monthly'
                >Monthly</button>
            </title>
            <Activity key={data.title} />
    </div>
)
}

export default User