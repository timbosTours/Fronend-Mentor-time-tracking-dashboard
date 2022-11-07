import './App.css';
import data from './data.json';
import Work from './components/Work';
import User from './components/User'

function App() {
  return (<main>
    <User />
    <Work key={data.work}/>
  </main>
  )
}

export default App;
