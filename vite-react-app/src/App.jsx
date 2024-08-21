import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  //let counter = 15;
  let [counter, setCounter] = useState(15);


  let addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }
    console.log("value added", counter);
  }



let removeValue = () => {
  if (counter > 0) {
    setCounter(counter - 1)
  }

  console.log("value added", counter);
}

return (
  <>
    <h1>Hello Samaresh</h1>
    <h2>counter value: {counter}</h2>
    <button
      onClick={addValue}
    >add value</button>
    <button
      onClick={removeValue}>decrease value</button>
      <Card chennel="hello"></Card>
  </>
)
}

export default App
