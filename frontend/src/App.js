import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
    <HomePage/>
    <Greet idNumber='1'></Greet> 
    <Greet idNumber='2'></Greet> 
    <Greet idNumber='3'></Greet> 
    <Welcome></Welcome>
    <Hello/>
    <Message/>
    <Counter/>
    <FunctionClick/>
    <ClassClick/>
    </div>
  );
}

export default App;
