import * as React from 'react';
import { useState, useCallback } from 'react';
// 혼자서 카운트 만들어 보기
const Counter = () => { 
    const [count, setCount] = useState(0);
    
    const increase = useCallback(() => setCount(prev => prev + 1), []);
    const decrease = useCallback(() => setCount(prev => prev -1), []);

    return (
        <div>
            {count}
            <button onClick={increase}>증가</button>
            <button onClick={decrease}>감소</button>
        </div>
    );
};

export default Counter;