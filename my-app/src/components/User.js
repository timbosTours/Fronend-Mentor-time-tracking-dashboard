import React from 'react';
import avatar from '../images/image-jeremy.png';
import data from '../data.json'

const User = () => {
    
    return (
    <div className="user">
        <img src={avatar} alt="" />
        <h1>Report for</h1>
            <h2>Jeremy Robson</h2>
            
            <form>
                <button onClick={console.log('daily')} className="radio-btn" type="radio">Daily</button>
                <button onClick={console.log('weekly')} className="radio-btn" type="radio">Weekly</button>
                <button onClick={console.log('monthly')} className="radio-btn" type="radio">Monthly</button>
            </form>
    </div>
)
}

export default User