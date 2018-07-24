import React from 'react';
import logo from '../images/d2-circle-text.svg';
import { slide as Menu } from 'react-burger-menu';
import { NavLink, NavNavLink } from 'react-router-dom'


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
                  <NavLink to='/'>Home</NavLink>
                  <NavLink to='/philosophy'>Philosophy/Inspiration</NavLink>
                  <NavLink to='/projects'>Projects</NavLink>
                  <NavLink to='/people'>People</NavLink>
                  <NavLink to='/d2u'>D2 University</NavLink>
                  <NavLink to='/sleepover'>Sleepover Project&reg;</NavLink>
                  <NavLink to='/news'>News</NavLink>
                  <NavLink to='/careers'>Careers</NavLink>
                  <NavLink to='/blog'>Blog</NavLink>
                  <NavLink to='/contact'>Contact Us</NavLink>
                  <NavLink to='/hat'>Where's My Hat?</NavLink>
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