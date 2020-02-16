import * as React from 'react';
import { useState, useCallback } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export interface todo {
    id: number;
    content: string;
    done : boolean;
}
const Todo = () => {
    const [todos, setTodo] = useState<todo[]>([]);

    const addTodo = useCallback((content: string) => {
        const maxId = todos.reduce((acc, current) => acc > current.id ? acc : current.id ,0);
        setTodo(prev => [...prev, {id: maxId + 1, content, done : false}])
    }, [todos]);
    const deleteTodo = useCallback((id:number) => () => {
        setTodo(todos.filter(t => t.id !== id));
    }, [todos])
    const toggleTodo = useCallback((id:number) => () => setTodo(todos.map(t => t.id === id ? {...t, done:!t.done} : t)), [todos]);
    
    return (
        <div>
            <TodoForm addTodo={addTodo}/>
            <TodoList 
            todos={todos}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            />
        </div>
    );
};

export default Todo;