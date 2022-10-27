import './App.css';
import data from './data.json';
// import avatar from './images/image-jeremy.png';
import work from './images/icon-work.svg';
// import play from './images/icon-play.svg';
// import study from './images/icon-study.svg';
// import exercise from './images/icon-exercise.svg';
// import social from './images/icon-social.svg';
// import selfcare from './images/icon-self-care.svg';


function App() {
  <Work/>
  // return (
  //   <div className="user content-box">
  //     <img src={ avatar } alt="user image" />
  //     <h1>Report for</h1>
  //     <p>Jeremy Robson</p>
  //   </div>


    
      // data.map(timeData => {
      // return (
      //   <div className="user content-box">
      //     <img src={ work } alt="" />
      //     <h1>{timeData.title}</h1>
      //     <p>{ timeData.timeframes.daily }</p>
      //   </div>
    //   )
    // })
}

// const User = () => {
//   return (
//     <div className="user content-box">
//       <img src={ avatar } alt="user image" />
//       <h1>Report for</h1>
//       <p>Jeremy Robson</p>
//     </div>);
// }
const Work = () => {
  return (
    data.map(timeData => {
      return (
        <div className="user content-box">
          <img src={work} alt="" />
          <h1>{timeData.title}</h1>
          <p>{timeData.timeframes.daily}</p>
        </div>
      )
    }))
}

// const Play = () => {
//   return (
//   <div className="play content-box">
//     <img src={ play } alt="play icon" />
//     <h1>Play</h1>
//     <p></p>
//   </div>
// )}
// const Study = () => {
//   return (
//   <div className="study content-box">
//     <img src={ study } alt="study icon" />
//     <h1>Study</h1>
//     <p></p>
//   </div>
// )}
// const Exercise = () => {
//   return (
//   <div className="excersice content-box">
//     <img src={ exercise } alt="exercise icon" />
//     <h1>Exercise</h1>
//     <p></p>
//   </div>
// )}
// const Social = () => { 
//   return(
//   <div className="social content-box">
//     <img src={ social } alt="social icon" />
//     <h1>Social</h1>
//     <p></p>
//   </div>
// )}
// const Selfcare = () => {
//   return (
//   <div className="selfcare content-box">
//     <img src={ selfcare } alt="selfcar icon" />
//     <h1>Selfcare</h1>
//     <p></p>
//   </div>
// )}

export default App;
