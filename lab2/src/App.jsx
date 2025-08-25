import { useState } from 'react'
import './App.css'
import CounterApp from './CounterApp';

function App() {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <>
      <CounterApp count={count}/>
      <button onClick={handleClick}>Click me!</button>
    </>
  )
}

export default App
