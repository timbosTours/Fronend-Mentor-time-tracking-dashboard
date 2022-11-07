import React from 'react';
import avatar from '../images/image-jeremy.png';

const User = () => {
    return (
    <div className="user">
        <img src={avatar} alt="" />
        <h1>Report for</h1>
        <h2>Jeremy Robson</h2>
    </div>
  )
}

export default User