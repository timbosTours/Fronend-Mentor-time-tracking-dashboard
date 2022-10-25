import './App.css';
import data from './data.json';
import avatar from './images/image-jeremy.png';
import work from './images/icon-work.svg';
import play from './images/icon-play.svg';
import study from './images/icon-study.svg';
import exercise from './images/icon-exercise.svg';
import social from './images/icon-social.svg';
import selfcare from './images/icon-self-care.svg';


function App() {
  return (
    <main>
    <User />
  <Work />
  <Play />
  <Study />
  <Exercise />
  <Social />
      <Selfcare />
    </main>
  );
}

const User = () => {
  return (
    <div className="user content-box">
      <img src={ avatar } alt="user image" />
      <h1>Report for</h1>
      <p></p>
    </div>);
}
const Work = () => {
  return (
  <div className="work content-box">
    <img src={ work } alt="work icon" />
    <h2>work</h2>
    <p></p>
  </div>
)}
const Play = () => {
  return (
  <div className="play content-box">
    <img src={ play } alt="play icon" />
    <h3>Play</h3>
    <p></p>
  </div>
)}
const Study = () => {
  return (
  <div className="study content-box">
    <img src={ study } alt="study icon" />
    <h4>Study</h4>
    <p></p>
  </div>
)}
const Exercise = () => {
  return (
  <div className="excersice content-box">
    <img src={ exercise } alt="exercise icon" />
    <h5>Exercise</h5>
    <p></p>
  </div>
)}
const Social = () => { 
  return(
  <div className="social content-box">
    <img src={ social } alt="social icon" />
    <h6>Social</h6>
    <p></p>
  </div>
)}
const Selfcare = () => {
  return (
  <div className="selfcare content-box">
    <img src={ selfcare } alt="selfcar icon" />
    <h7>Selfcare</h7>
    <p></p>
  </div>
)}

export default App;
