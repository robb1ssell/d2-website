import React, { Component } from 'react';
import logo from './images/d2-circle-text.svg';
import './styles/App.css';
import './styles/burger-style.css'
import { slide as Menu } from 'react-burger-menu'

class App extends Component {

  showSettings (event) {
    event.preventDefault();
  }

  render() {
    return (
      <div id="main">
        <header>
            <div className="container-fluid">
            <div className="row">
              <div className="col-xs-2 col-xs-push-2">
                <nav>
                  <Menu
                    id={ "navbar" }
                    burgerButtonClassName={ "my-class" }
                  >
                    <a id="nav-home" className="nav-link">Home</a>
                    <a id="nav-phil" className="nav-link">Philosophy/Inspiration</a>
                  </Menu>
                </nav>
              </div>
              <div className="col-xs-10 col-xs-pull-10">
                <img src={logo} className="top-logo" alt="D2 Architecture" />
              </div>
            </div>
            </div>
        </header>
      </div>
    );
  }
}

export default App;
