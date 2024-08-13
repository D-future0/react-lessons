import React from 'react';
import { createRoot } from 'react-dom/client';
import './lesson.css';
import BookList from './lessons/lesson2';


{/*const Greetings = ()=>{
  const name = prompt(`what is your name:`)
  console.log(name)
  return <h1>HELLO {`${name}`}, THIS IS YOUR FIRST REACT APP</h1>
}*/}



const container = document.getElementById('root');
const root = createRoot(container);
root.render(<BookList tab="home" />); 
// ReactDOM.render(<BookList></BookList>, root) 
// ReactDOM.render(
//   <React.StrictMode>
//     < SayHello/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
