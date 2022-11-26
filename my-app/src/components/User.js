import React, {useState} from 'react'; 
import avatar from '../images/image-jeremy.png';
import Activity from './Activity';

const User = () => {
    //  handle state so it can be passed down via props (defaults to weekly(value 2))
    const [value, setValue] = useState(2)

    
    return (
        <div className='main-content'>
            <div className='user'>
                {/* menu of buttons to handle state and pass it down compnent tree */}
                <div className='timeframes'>
            <menu className='menu'>
                        <button key={'daily'} onClick={() => { setValue(1) }} className={value === 1 ? "clicked" : null}>Daily</button>
                <button key={'weekly'} onClick={() => { setValue(2) }} className={value === 2 ? "clicked" : null} >Weekly</button>
                <button key={'monthly'} onClick={() => { setValue(3) }} className={value === 3 ? "clicked" : null} >Monthly</button>
                </menu>
                </div>
                <div className='user-card'>
            <div className='avatar-box'>
            <img className='avatar' src={avatar} alt="" />
            <h1 className='report-for'>Report for</h1>
            <h2 className='user-name'>Jeremy Robson</h2>
                    </div>
                </div>
            </div>
            {/* child component recieves value in form of state */}
            <Activity value={value} />
        </div>
    )
}

export default User
