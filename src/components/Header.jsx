import React from 'react';
import logo from '../images/d2-circle-text.svg';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom'


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
                  <Link to='/' exact>Home</Link>
                  <Link to='/philosophy' exact>Philosophy/Inspiration</Link>
                  <Link to='/' exact>Projects</Link>
                  <Link to='/' exact>People</Link>
                  <Link to='/' exact>D2 University</Link>
                  <Link to='/' exact>Sleepover Project&reg;</Link>
                  <Link to='/' exact>News</Link>
                  <Link to='/' exact>Careers</Link>
                  <Link to='/' exact>Blog</Link>
                  <Link to='/contact' exact>Contact Us</Link>
                  <Link to='/' exact>Where's My Hat?</Link>
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