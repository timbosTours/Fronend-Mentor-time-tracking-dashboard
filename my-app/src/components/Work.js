import React from 'react'

function Work() {
    const { title, img,
    timeframes:
    { daily, weekly, monthly }
    
} = props.activity;
return (
    <div className='content-box'>
    <span>
        <img id="icon-svg" src={img} alt="" />
    </span>

    <h1>{title}</h1>
    <p>{daily.current}</p>
    <p>{ daily.previous }</p>
    <p>{weekly.current}</p>
    <p>{ weekly.previous }</p>
    <p>{monthly.current}</p>
    <p>{ monthly.previous }</p>
    
    
    </div>)
}

export default Work