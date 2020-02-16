import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import Todo from './Todo';

const Hot = hot(Todo);

ReactDOM.render(<Hot/>, document.querySelector('#root'));