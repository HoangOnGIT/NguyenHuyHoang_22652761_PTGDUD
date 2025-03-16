import { useReducer, useState } from 'react'
import './App.css'

function App() {

  const [inputa, setInputA] = useState("");
  const [inputb, setInputB] = useState("");

  function reducer(state, action) {
    switch (action.type) {
      case "+":
        return { ...state, result: parseInt(inputa) + parseInt(inputb) }
      case "-":
        return { ...state, result: parseInt(inputa) - parseInt(inputb) }
      case "*":
        return { ...state, result: parseInt(inputa) * parseInt(inputb) }
      case "/":
        if (parseInt(inputb)) 
        return { ...state, result: parseInt(inputa) / parseInt(inputb) }
      default:
        console.log("unknown action");
    }
  }

  const [state, displatch] = useReducer(reducer, { result: 0 })


  return (
    <>
    <h1 className='text-3xl font-bold underline'>{state.result}</h1>
      <div> 
        <input type='text' placeholder='input A' value={inputa} onChange={(e) => setInputA(e.target.value)}/>
        <input type='text' placeholder='input B' value={inputb} onChange={(e) => setInputB(e.target.value)}/>
      </div>

      <button onClick={()=> displatch({type:"+"})}>+</button>
      <button onClick={()=> displatch({type:"-"})}>-</button>
      <button onClick={()=> displatch({type:"*"})}>*</button>
      <button onClick={()=> displatch({type:"/"})}>/</button>
    </>
  )
}

export default App
