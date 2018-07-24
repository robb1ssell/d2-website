import React, { Component } from 'react';
import './styles/App.css';
import './styles/burger-style.css'
import Header from './components/Header'

class App extends Component {

  render() {
    return (
      <div id="master-container">
        <Header/>
      </div>
    );
  }
}

export default App;
