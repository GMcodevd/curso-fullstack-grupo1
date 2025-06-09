import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import PageFeeds from './pages/PageFeeds';
import Footer
  from './components/Footer';
import AdivinaComponent from './examples/AdivinaComponent';
import MutableComponent from './examples/MutableComponent';
import HookExample from './examples/HookExample';
import { ClassEffectComponentOld } from './examples/ClassEffectComponentOld';
import { EffectComponent } from './examples/EffectComponent';
import AdivinaComponent2 from './merlo-german-trabajo-reactjs/ejercicio1-adivinaComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <EffectComponent/> */}
    {
    //<ClassEffectComponentOld/>
    //<AdivinaComponent></AdivinaComponent>
    <AdivinaComponent2></AdivinaComponent2>       //Resolución de la primera actividad ReactJS
     // <MutableComponent></MutableComponent>
     // <HookExample></HookExample>
     // <Footer></Footer>
     }
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
