const Header=(props)=>{
  
  return(
    <>
      <h1>{props.course}</h1>

    </>
  )
}

const Part=(props)=>{
  
  return (
    <>
    <p> {props.part1} {props.exercises1}</p>
    <p> {props.part2} {props.exercises1}</p>
    <p> {props.part3} {props.exercises3}</p>
    </>
  )
}
const Content=()=>{
  const part1="Fundamentals of React"
  const part2="Using props to pass data"
  const part3="State of a component"
  const exercises1= 10
  const exercises2=7
  const exercises3=14
  return (
    <div>
    <Part part1={part1} exercises1={exercises1}/>
    <Part part2={part2} exercises2={exercises2}/>
    <Part part3={part3} exercises3={exercises3}/>
  
  </div>
  )
}

const App=()=>{
  const course="Half Stack application development"
  
  return (
    <>
      <Header course={course}/>
      <Content />
    </>
  )
}

export default App