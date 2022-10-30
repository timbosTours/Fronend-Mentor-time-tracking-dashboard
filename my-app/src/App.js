import './App.css';
import data from './data.json';
import avatar from './images/image-jeremy.png';

function App() {
  return (<main>
    <User/>
    <div >
      {data.map(activity => {
        return (
          <Activity key={activity.title} activity={activity} />
        );
      })}
    </div>
    

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

const Activity = (props) => {
  const {  title, img } = props.activity;
  return (
    <div className='content-box'>
      <span>
        <img src={img} alt="" />
      </span>

      <h1>{title}</h1>
      
    </div>
  );

}


export default App;
