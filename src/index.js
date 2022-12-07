import React,{Component}from 'react';
import ReactDOM from 'react-dom/client';
import './css/custom.css';
import App from './App';
import GenCate from './componants/Cate';
import Search from './componants/Search';
import Person from './componants/Person';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import $ from 'jquery';

const root = ReactDOM.createRoot(document.getElementById('root'));

// function Search() {
//   return (
//     <div className="container">
//       <div className="search-box">
//           <input className='search'></input>
//           <div className='btn-clear'>Clear</div>
//       </div>
//     </div>
//   );
// }



root.render(
  <React.StrictMode>
    <App />
    <GenCate />
    <Search />
    <Person />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
