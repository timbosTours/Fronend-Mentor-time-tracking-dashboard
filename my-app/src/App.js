import './App.css';

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
      <h1>Report for</h1>
      <p></p>
    </div>);
}
const Work = () => {
  return (
  <div className="work content-box">
    <h1>Work</h1>
    <p></p>
  </div>
)}
const Play = () => {
  return (
  <div className="play content-box">
    <h1>Play</h1>
    <p></p>
  </div>
)}
const Study = () => {
  return (
  <div className="study content-box">
    <h1>Study</h1>
    <p></p>
  </div>
)}
const Exercise = () => {
  return (
  <div className="excersice content-box">
    <h1>Exercise</h1>
    <p></p>
  </div>
)}
const Social = () => {  
  <div className="social content-box">
    <h1>Social</h1>
    <p></p>
  </div>
}
const Selfcare = () => {
  return (
  <div className="selfcare content-box">
    <h1>Selfcare</h1>
    <p></p>
  </div>
)}

export default App;
