import * as React from 'react';
import { useState, useCallback } from 'react';
import {todo} from './Todo';
interface props {
    addTodo: (text: string) => void
}

const TodoForm:React.FC<props> = ({addTodo}) => {
    const [text, setText] = useState('');
    const onChange = useCallback<(e:React.ChangeEvent<HTMLInputElement>) => void>((e) => {
        setText(e.target.value);
    }, []);
    const onClickAdd = () => {
        addTodo(text);
        setText('');
    }
    return (
        <div>
            <input value={text} onChange={onChange} ></input>
            <button onClick={onClickAdd}>추가</button>
        </div>
    );
};

export default TodoForm;