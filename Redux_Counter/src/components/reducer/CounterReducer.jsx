import { useReducer } from "react"

function reducer(state, action) {
    switch(action.type) {
        case 'inc': {
            return {...state, counter: state.counter+1}
        }
        case 'desc': {
            return {...state, counter: state.counter-1}
        }
    }
}

export default function CounterReducer(){
    
    const [state, dispatch] = useReducer(reducer, {counter: 0});

    function handlePlus(){
        dispatch({type: 'inc'})
    }

    function handleMinus() {
        dispatch({type: 'desc'})
    }

    return <>
    <h1>Counter: {state.counter}</h1>
    <button onClick={() => handlePlus()}>+</button>
    <button  onClick={() => handleMinus()}>-</button>
    </>
}
