import { useState } from "react"

const Hello=({name,age})=>{
  const bornYear=()=>{
    return new Date().getFullYear() - age
  }
  return(
    <div>
      <p> Hello {name}, you are {age} and you were probably born in {bornYear()}</p>
    </div>
  )
}
const Display=({counter})=>{
  return (
    <>{counter}</>
  )
}
const Button=({onClick,text})=><button onClick={onClick}>{text}</button>
   

const App=()=>{
  const name="Peter"
  const age=10
  const [counter,setCounter]=useState(0)
  const increseBy10= ()=> setCounter(counter +10)
  const setToZero=()=> setCounter(0)
  const decreasedBy10=()=> setCounter(counter -10)

  return(
    <div>
    <h1>Greetings</h1>
    <Hello name="Maya" age={20+10}/>
    <Hello name={name} age={age}/>
    <Display counter={counter}/>
    <button onClick={increseBy10} text="plus"></button>
    <button onClick={setToZero} text="Zero"></button>
    <button onClick={decreasedBy10} text="minus10"></button>
  </div>
  )
  
 
  
}
export default App