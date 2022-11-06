import './App.css';
import data from './data.json';
import avatar from './images/image-jeremy.png';
import Work from './components/Work'

function App() {
  return (<main>
    <User />
    <Work />
    {/* <div >
      {data.map(activity => {
        return (
          <Activity key={activity.title} activity={activity} />
        );
      })}
    </div> */}
  </main>
  )
}

const User = () => {
  return (
    <div className="user">
      <img src={avatar} alt="" />
      <h1>Report for</h1>
      <h2>Jeremy Robson</h2>
    </div>
  )
}

// const Activity = (props) => {
//   const { title, img,
//     timeframes:
//     { daily, weekly, monthly }
    
//   } = props.activity;
//   return (
//     <div className='content-box'>
//       <span>
//         <img id="icon-svg" src={img} alt="" />
//       </span>

//       <h1>{title}</h1>
//       <p>{daily.current}</p>
//       <p>{ daily.previous }</p>
//       <p>{weekly.current}</p>
//       <p>{ weekly.previous }</p>
//       <p>{monthly.current}</p>
//       <p>{ monthly.previous }</p>
      
      
//     </div>
//   );

// }


export default App;
