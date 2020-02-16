import * as React from 'react';
import {memo} from 'react';
import {todo} from './Todo';

interface props {
    todo: todo;
    deleteTodo: (id: number) => () => void;
    toggleTodo: (id: number) => () => void;
}

const TodoItem = ({todo, deleteTodo, toggleTodo}: props) => {
    return (
        <div style={{color : todo.done ? "#ff4300" : "black"}}>
            {todo.content}
            <button onClick={toggleTodo(todo.id)}>완료</button>
            <button onClick={deleteTodo(todo.id)}>삭제</button>
        </div>
    );
};

export default memo(TodoItem);