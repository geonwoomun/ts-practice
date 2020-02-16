import * as React from 'react';
import TodoItem from './TodoItem';
import { useTodoState } from './contexts/TodosContext';

function TodoList() {
    const todos = useTodoState();

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem todo={todo} key={todo.id}/>
            ))}
        </ul>
    );
}

export default TodoList;