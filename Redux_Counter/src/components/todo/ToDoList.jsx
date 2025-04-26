import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "../../redux/slices/todoSlice";

const ToDoList = () => {
  const [newTodoText, setNewTodoText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodoText.trim()) {
      dispatch(addTodo(newTodoText));
      setNewTodoText("");
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-container">
      <style>
        {`
          .todo-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 30px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          
          h2 {
            color: #2c3e50;
            text-align: center;
            margin-bottom: 25px;
            font-size: 28px;
            border-bottom: 2px solid #f1f1f1;
            padding-bottom: 10px;
          }
          
          .add-todo {
            display: flex;
            margin-bottom: 20px;
          }
          
          .add-todo input {
            flex: 1;
            padding: 12px 15px;
            border: 1px solid #ddd;
            border-radius: 4px 0 0 4px;
            font-size: 16px;
            outline: none;
            transition: border-color 0.3s;
          }
          
          .add-todo input:focus {
            border-color: #3498db;
            box-shadow: 0 0 5px rgba(52, 152, 219, 0.3);
          }
          
          .add-todo button {
            padding: 12px 20px;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 0 4px 4px 0;
            cursor: pointer;
            font-size: 16px;
            font-weight: 600;
            transition: background-color 0.3s;
          }
          
          .add-todo button:hover {
            background-color: #2980b9;
          }
          
          .todo-list {
            list-style-type: none;
            padding: 0;
          }
          
          .todo-list li {
            display: flex;
            align-items: center;
            padding: 15px;
            background-color: #f9f9f9;
            margin-bottom: 10px;
            border-radius: 5px;
            transition: all 0.2s;
            animation: fadeIn 0.3s;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .todo-list li:hover {
            background-color: #f1f1f1;
            transform: translateY(-2px);
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          }
          
          .todo-list li.completed {
            background-color: #f0f7f4;
            border-left: 4px solid #27ae60;
          }
          
          .todo-list li.completed .todo-text {
            text-decoration: line-through;
            color: #7f8c8d;
          }
          
          .todo-list input[type="checkbox"] {
            margin-right: 15px;
            width: 18px;
            height: 18px;
            cursor: pointer;
          }
          
          .todo-text {
            flex: 1;
            font-size: 16px;
            color: #34495e;
          }
          
          .delete-btn {
            background-color: #e74c3c;
            color: white;
            border: none;
            padding: 8px 12px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            transition: background-color 0.3s;
          }
          
          .delete-btn:hover {
            background-color: #c0392b;
          }
          
          .empty-message {
            text-align: center;
            color: #95a5a6;
            font-style: italic;
            padding: 20px 0;
          }
        `}
      </style>
      <h2>To-Do List</h2>

      <div className="add-todo">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Todo ..."
        />
        <button onClick={handleAddTodo}>Thêm</button>
      </div>

      <ul className="todo-list">
        {todos && todos.length > 0 ? (
          todos.map((todo) => (
            <li key={todo.id} className={todo.completed ? "completed" : ""}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo.id)}
              />
              <span className="todo-text">{todo.text}</span>
              <button
                className="delete-btn"
                onClick={() => handleRemoveTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <li className="empty-message">Chưa có todo nào!</li>
        )}
      </ul>
    </div>
  );
};

export default ToDoList;
