import React, { Component } from 'react';
import logo from './images/d2-circle-text.svg';
import './styles/App.css';
import { slide as Menu } from 'react-burger-menu'

class App extends Component {

  showSettings (event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <header className="row">
          <div className="">
            <img src={logo} className="top-logo" alt="logo" />
          </div>
            <Menu>
              <a id="nav-home" className="nav-link">Home</a>
              <a id="nav-phil" className="nav-link">Philosophy/Inspiration</a>
            </Menu>
        </header>
      </div>
    );
  }
}

export default App;
