import React from 'react';
import logo from '../images/d2-circle-text.svg';
import { slide as Menu } from 'react-burger-menu';
import { NavLink, Link } from 'react-router-dom'


class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  // This keeps state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  // This is used to close the menu when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }

  showSettings (event) {
    event.preventDefault();
  }
  
  render() {
    return (
      <div id="header-master">
        <header>
          <div id="header-content" className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                {/****  TODO: Close menu when a link is clicked  ****/}
                <Menu
                  noOverlay
                  width={ 250 }
                  id={"navbar"}
                  burgerButtonClassName={"my-class"}
                  isOpen={this.state.menuOpen}
                  onStateChange={(state) => this.handleStateChange(state)}
                > 
                  <NavLink to='/'
                    onClick={() => this.closeMenu()}
                  >Home
                  </NavLink>
                  <NavLink to='/philosophy'
                    onClick={() => this.closeMenu()}
                  >Philosophy/Inspiration
                  </NavLink>
                  <NavLink to='/projects'
                    onClick={() => this.closeMenu()}
                  >Projects
                  </NavLink>
                  <NavLink to='/people'
                    onClick={() => this.closeMenu()}
                  >People
                  </NavLink>
                  <NavLink to='/d2u'
                    onClick={() => this.closeMenu()}
                  >D2 University
                  </NavLink>
                  <NavLink to='/sleepover'
                    onClick={() => this.closeMenu()}
                  >Sleepover Project&reg;
                  </NavLink>
                  <NavLink to='/news'
                    onClick={() => this.closeMenu()}
                  >News
                  </NavLink>
                  <NavLink to='/careers'
                    onClick={() => this.closeMenu()}
                  >Careers
                  </NavLink>
                  <NavLink to='/blog'
                    onClick={() => this.closeMenu()}
                  >Blog
                  </NavLink>
                  <NavLink to='/contact'
                    onClick={() => this.closeMenu()}
                  >Contact Us
                  </NavLink>
                  <NavLink to='/hat'
                    onClick={() => this.closeMenu()}
                  >Where's My Hat?
                  </NavLink>
                </Menu>
                
                <Link to='/'>
                  <img src={logo} className="top-logo pull-right" alt="D2 Architecture" />
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
};

export default Header;