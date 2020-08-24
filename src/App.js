import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import store from './redux/store.js';

import Navigation from "./components/Navigation/Navigation";
import Header from './components/Header/Header';
import InpageNav from './components/InpageNav/InpageNav';
import Content from './components/Content/Content';
import Additions from './components/Additions/Additions';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navigation />
        <div className="container-main">
          <Header />
          <div className="content-n-footer">
            <div className="wrapper">
              <InpageNav />
              <Content />
              <Additions />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;