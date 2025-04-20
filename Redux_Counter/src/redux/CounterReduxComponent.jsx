import React from 'react'
import { Provider } from 'react-redux'

export default function CounterReduxComponent() {
  return (
    <Provider store={store} >
    <div>CounterReduxComponent</div>
    </Provider>
  )
}
