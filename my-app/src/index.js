import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';




const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />); 
// ReactDOM.render(<BookList></BookList>, root) 
// ReactDOM.render(
//   <React.StrictMode>
//     < SayHello/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
