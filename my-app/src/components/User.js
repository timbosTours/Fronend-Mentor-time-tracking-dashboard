import React, {useState} from 'react'; 
import avatar from '../images/image-jeremy.png';
import Activity from './Activity';

const User = () => {
    //  handle state so it can be passed down via props (defaults to weekly(value 2))
    const [value, setValue] = useState(2)

    
    return (
        <div className="user">
            <img src={avatar} alt="" />
            <h1>Report for</h1>
            <h2>Jeremy Robson</h2>
            
            {/* menu of buttons to handle state and pass it down compnent tree */}
            <menu className='menu'>
                <button key={'daily'} onClick={() =>
                { setValue(1) }} className='daily' >Daily</button>
                <button key={'weekly'} onClick={() => { setValue(2) }} className='weekly' >Weekly</button>
                <button key={'monthly'} onClick={() => { setValue(3) }} className='monthly'
                >Monthly</button>
            </menu>
            {/* child component recieves value in form of state */}
            <Activity value={value} />
        </div>
    )
}

export default User
