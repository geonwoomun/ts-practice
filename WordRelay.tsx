import * as React from 'react';
import { useState, useCallback, useRef } from 'react';

const WordRelay = () => {
    const [word, setWord] = useState('문건우');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const inputEl = useRef<HTMLInputElement | null>(null);

    const onSubmitForm = useCallback((e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(word[word.length-1] === value[0]){
            setResult("딩동댕");
            setWord(value);
            setValue('');
            if(inputEl.current){
                inputEl.current.focus();
            }
        }
        else {
            setResult('땡');
            setValue('');
            if(inputEl.current){
                inputEl.current.focus();
            }
        }
    }, [word, value]);
    const onChangeInput = useCallback<(e:React.ChangeEvent<HTMLInputElement>) => void>((e) => {
        setValue(e.target.value);
    },[]);
    return(
        <div>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <input onChange={onChangeInput} ref={inputEl} value={value}/>
                <button>입력</button>
            </form>
            <div>{result}</div>
        </div>
    )
}

export default WordRelay;