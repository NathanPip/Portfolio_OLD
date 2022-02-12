import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/css/normalize.css'
import './Styles/css/main.css';
import App from './App';
import DATA from './DATA'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App skills={DATA.SKILLS_DATA} projects={DATA.PROJECTS_DATA}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
