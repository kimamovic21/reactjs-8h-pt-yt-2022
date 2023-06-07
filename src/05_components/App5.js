import React, { useState } from 'react';
import './App5.css';

const App5 = () => {
  const [newTask, setNewTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const newTaskHandler = (e) => {
    setNewTask(e.target.value);
    // console.log(newTask);
  };

  const addTodoListHandler = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
    console.log(todoList);
    console.log(newTask);
  };

  const deleteTaskHandler = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
    console.log(todoList);
  };

  const deleteTaskHandler2 = (taskName) => {
    const newTodoList = todoList.filter((task) => {
      console.log(task);
      if (task === taskName) {
        return false;
      } else {
        return true;
      };
    });
    setTodoList(newTodoList);
    console.log(newTodoList);
    console.log(todoList);
  };

  const completeTaskHandler = (id) => {
    setTodoList(todoList.map((task) =>{
      if(task.id === id) {
        return {...task, completed: true};
      } else {
        return task;
      };
    }));
  };

  return (
    <div className='App4'>

      <div className='addTask'>
        <input 
            type="text" 
            onChange={newTaskHandler}
        />
        <button onClick={addTodoListHandler}>Add Task</button>
      </div>

      <div className='list'>
          {todoList.map((task, index) => {
            // console.log(task, index)
            return (
              <div className='task' key={index} style={{textDecoration: task.completed ? 'line-through' : 'none'}}>
                <h4>{task.taskName}</h4>
                <button onClick={() => completeTaskHandler(task.id)}>
                    Complete
                </button>
                <button onClick={() => deleteTaskHandler(task.id)}> 
                    Delete task 
                </button>
              </div>
            )
          })}
      </div>

    </div>
  );
};

export default App5;
