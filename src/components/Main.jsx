import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import ContactUs from './ContactUs';

class Main extends Component {
  render() {
    return (
      <div>
        <main>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/contact' component={ContactUs}/>
          </Switch>
          </main>
      </div>
    );
  }
}

export default Main;