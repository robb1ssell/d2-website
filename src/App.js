import React, { Component } from 'react';
import './styles/App.css';
import './styles/burger-style.css'
import Header from './components/Header'
import { Route } from 'react-router-dom'
import ContactUs from './components/ContactUs';

class App extends Component {

  render() {
    return (
      <div id="master-container">
        <Header/>
        <Route
          exact
          path='/'
          render={() => (<App/>)}
        />
        <Route
          path='/contact'
          render={() => (<ContactUs/>)}
        />
      </div>
    );
  }
}

export default App;
