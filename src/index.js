import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import Navbar from "./component/navbar";
import "./style/all.scss";
import WeatherApp from "./component/WeatherApp";
import Head from "./component/head";
// import ThreeIcon from "./component/threeSelectIcon"
// import '../src';
// import reportWebVitals from './reportWebVitals';
function App() {
  return (
    <div>
      <Head />
      <WeatherApp />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <div>
//     <Head/>
// <WeatherApp/>
//   </div>

// );
