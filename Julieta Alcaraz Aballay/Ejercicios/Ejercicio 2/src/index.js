import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import PagesColors from './pages/PagesColors';
//import PagesFeed from "./pages/PageFeed";
//import Feed from './components/Feed';
//import MutableComponent from "./ejemplos.jsx/mutableComponent";
//import ClassEffectComponent from "./components/ClassEffectComponent";
//import PageAdivinaComponent from "./pages/PageAdivinaComponent";
import PageNewVideoclip from "./pages/PageNewVideoclip";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   //para renderizar <PagesColors></PagesColors>
  <React.StrictMode>
<PageNewVideoclip></PageNewVideoclip>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
