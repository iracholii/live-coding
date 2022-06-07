import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';

const users = [
  { name: 'Tom', age: 20, id: '01' },
  { name: 'Bob', age: 100, id: '02' },
  { name: 'Rob', age: 32, id: '03' },
  { name: 'Rim', age: 45, id: '04' },
  { name: 'Skin', age: 27, id: '05' },
  { name: 'Bobby', age: 26, id: '06' },
  { name: 'Jack', age: 19, id: '07' },
  { name: 'Bom', age: 21, id: '08' },
  { name: 'DOM', age: 22, id: '09' },
  { name: 'Toretto', age: 60, id: '10' },
];

const rootElement = document.querySelector('#root');

ReactDOM.render(<UsersList users={users} />, rootElement);
