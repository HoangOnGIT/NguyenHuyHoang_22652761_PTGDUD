import { useState } from 'react'
import './App.css'
import CounterReducer from './reducer/CounterReducer'
import { Provider } from 'react-redux'

import store from "../src/redux/CounterRedux"
import CounterReduxComponent from './redux/CounterReduxComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Reducer: </h1>
      <CounterReducer />

      <h1>Redux: </h1>
      <Provider store={store}>
        <CounterReduxComponent />
      </Provider>
    </>
  )
}

export default App
