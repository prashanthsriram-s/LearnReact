import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// function formatter(name){
//   return name.f + name.r;
// }
// const name = {
//   f: "haha",
//   r: "hehe"
// };

// function greet(user){
//   if(user){
//     return <h1>Hello, {formatter(user)}!</h1>;
//   }
//   else return <h1>Hello, User!</h1>;
// }

// function elem(){
//   return (<div>
//     <h1>{greet()}</h1>
//     <h3>Howdyoi</h3>
//   </div>);
// }
// function Tick(){
//   root.render(<div>
//                 <h1>Hello, World!</h1>
//                 <h2>Now, it's {new Date().toLocaleTimeString()}</h2>
//             </div>);
// }
// setInterval(Tick, 100);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <App />
</React.StrictMode>);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
