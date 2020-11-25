import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header/Header';
import './style.scss';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
); 
