import './App.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './store/todoSlice';
import TodoList from './components/TodoList';
import InputField from './components/InputField';

function App() {  
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const addTask = () => {
    dispatch(addTodo({text}))
    setText('');
  };
  
  return (
    <div className='App'>
      <p>Todo on React/Redux Toolkit</p> 
      <InputField 
        text={text}
        updateText={setText}
        handleSubmit={addTask}
      />
      <TodoList />
    </div>
  );
}

export default App;
