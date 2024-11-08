// import { useState } from 'react'
import './App.css'
import EventPropogation from './components/evenPropogation'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hi All</h1>
      <EventPropogation/>
      {/* <button onClick={()=> setCount(count => count +1)} >Increase+</button>
      <button onClick={()=> setCount(count => count -1)} >decrease-</button>
      <h2>{count}</h2> */}
    </>
  )
}

export default App
