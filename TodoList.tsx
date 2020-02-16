import * as React from 'react';
import {todo} from './Todo';
import TodoItem from './TodoItem';

interface props {
    todos: todo[];
    deleteTodo: (id: number) => () => void;
    toggleTodo: (id: number) => () => void;
}
const TodoList:React.FC<props> = ({todos, deleteTodo, toggleTodo}) => {
    return (
        <div>
            {todos.map(t => <TodoItem key={t.id} todo={t} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>)}
        </div>
    );
};

export default TodoList;