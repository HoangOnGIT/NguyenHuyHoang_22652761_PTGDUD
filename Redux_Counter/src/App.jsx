import { useState } from "react";
import "./App.css";
import CounterReducer from "./components/reducer/CounterReducer";
import { Provider } from "react-redux";

import store from "./components/redux/CounterRedux";
import CounterReduxComponent from "./components/redux/CounterReduxComponent";
import ToDoList from "./components/todo/ToDoList";
import todoStore from "./redux/store"; // Import the todoStore

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1>Reducer: </h1>
      <CounterReducer />

      <h1>Redux: </h1>
      <Provider store={store}>
        <CounterReduxComponent />
      </Provider> */}

      <h1>To Do List: </h1>
      <Provider store={todoStore}>
        <ToDoList />
      </Provider>
    </>
  );
}

export default App;
