import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/css/normalize.css'
import './Styles/css/main.css';
import App from './App';
import DATA from './DATA'

ReactDOM.render(
  <React.StrictMode>
    <App skills={DATA.SKILLS_DATA} projects={DATA.PROJECTS_DATA}/>
  </React.StrictMode>,
  document.getElementById('root')
);
