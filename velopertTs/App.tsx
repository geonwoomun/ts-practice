import * as React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList'
import { TodosContextProvider } from './contexts/TodosContext';

const App = () => {
    return(
        <TodosContextProvider>
            <TodoForm/>
            <TodoList/>
        </TodosContextProvider>
    );
};

export default App;