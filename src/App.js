
import './App.css';
import Beginner from './Beginner';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Coding Curriculum</h1>
       <Navbar/>
       <Beginner/>
       
      </header>
    </div>
  );
}

export default App;
