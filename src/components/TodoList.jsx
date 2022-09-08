import {useSelector} from 'react-redux';
import TodoItem from "./TodoItem"

const TodoList = () => {

  const todos = useSelector(state => state.todos.todos);  

  return (
    <ul>
        {todos.map((todo) => (
            <TodoItem 
                key={todos.id}                    
                {...todo}
            />)
        )}
    </ul>
  );
};

export default TodoList