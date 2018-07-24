import React from 'react';
import logo from '../images/d2-circle-text.svg';
import { slide as Menu } from 'react-burger-menu';


class Header extends React.Component {

  showSettings (event) {
    event.preventDefault();
  }
  
  render() {
    return (
      <div>
        <header>
          <div id="main" className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <Menu
                  noOverlay
                  width={ 250 }
                  id={"navbar"}
                  burgerButtonClassName={"my-class"}
                >
                  <a id="nav-home" className="nav-link">Home</a>
                  <a id="nav-phil" className="nav-link">Philosophy/Inspiration</a>
                </Menu>
                <img src={logo} className="top-logo pull-right" alt="D2 Architecture" />
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
};

export default Header;