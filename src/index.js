import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  {id: 1, post: 'Hi, how are you?', likesCount: 15},
  {id: 2, post: 'Hi, i\'m well', likesCount: 20},
  {id: 3, post: 'Hi, how', likesCount: 35}
];

ReactDOM.render(<App posts={posts}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
