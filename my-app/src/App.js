import './App.css';
import './data.json';
import avatar from './images/image-jeremy.png'


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
    <img src="./" alt="" />
    <h1>Work</h1>
    <p></p>
  </div>
)}
const Play = () => {
  return (
  <div className="play content-box">
    <img src="./" alt="" />
    <h1>Play</h1>
    <p></p>
  </div>
)}
const Study = () => {
  return (
  <div className="study content-box">
    <img src="./" alt="" />
    <h1>Study</h1>
    <p></p>
  </div>
)}
const Exercise = () => {
  return (
  <div className="excersice content-box">
    <img src="./" alt="" />
    <h1>Exercise</h1>
    <p></p>
  </div>
)}
const Social = () => {  
  <div className="social content-box">
    <img src="./" alt="" />
    <h1>Social</h1>
    <p></p>
  </div>
}
const Selfcare = () => {
  return (
  <div className="selfcare content-box">
    <img src="./" alt="" />
    <h1>Selfcare</h1>
    <p></p>
  </div>
)}

export default App;
