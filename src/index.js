import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/normalize.css'
import './Styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const SKILLS_DATA = [
  {
    id: "html",
    title: "HTML",
    src: "https://img.icons8.com/ios/100/000000/html-5--v2.png",
    desc: "lorem ipsumn joeasnoidnpa fsdionf sdf iosd908wejrnj 90jnjdhshnf 9ijaIEWHJJNFIJNSDHJB FIOSNDF SDNFJS PL NJDHSFCBGUF DS"
  },
  {
    id: "css",
    title: "CSS",
    src: "https://img.icons8.com/ios/100/000000/css.png",
    desc: "lorem ipsumn joeasnoidnpa fsdionf sdf iosd908wejrnj 90jnjdhshnf 9ijaIEWHJJNFIJNSDHJB FIOSNDF SDNFJS PL NJDHSFCBGUF DS"
  },
  {
    id: "js",
    title: "Javascript",
    src: "https://img.icons8.com/ios/100/000000/javascript--v1.png",
    desc: "lorem ipsumn joeasnoidnpa fsdionf sdf iosd908wejrnj 90jnjdhshnf 9ijaIEWHJJNFIJNSDHJB FIOSNDF SDNFJS PL NJDHSFCBGUF DS"
  },
  {
    id: "react",
    title: "React",
    src: "https://img.icons8.com/ios-glyphs/120/000000/react.png",
    desc: "lorem ipsumn joeasnoidnpa fsdionf sdf iosd908wejrnj 90jnjdhshnf 9ijaIEWHJJNFIJNSDHJB FIOSNDF SDNFJS PL NJDHSFCBGUF DS"
  }
];

const PROJECTS_DATA = [
  {}
]




ReactDOM.render(
  <React.StrictMode>
    <App skills={SKILLS_DATA}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
