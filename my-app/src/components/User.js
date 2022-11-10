import React from 'react';
import avatar from '../images/image-jeremy.png';
import data from '../data.json';
import Work from '../components/Work';
import Play from '../components/Play';
import Study from '../components/Study';
import Exercise from '../components/Exercise';
import Social from '../components/Social';
import SelfCare from '../components/SelfCare';


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
            <Work key={data.work}/>
            <Play key={data.play}/>
            <Study key={data.study}/>
            <Exercise key={data.exercise}/>
            <Social key={data.social}/>
            <SelfCare key={data.selfcare}/>
        </div>
        
)
}

export default User