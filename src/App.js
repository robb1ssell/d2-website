import React, { Component } from 'react';
import './styles/App.css';
import './styles/burger-style.css';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {

  render() {
    return (
      <div id="master-container">
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
