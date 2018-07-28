import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import ContactUs from './ContactUs';
import Blog from './Blog';
import Careers from './Careers';
import D2U from './D2U';
import Hat from './Hat';
import News from './News';
import People from './People';
import Philosophy from './Philosophy';
import Portfolio from './Portfolio';
import Sleepover from './Sleepover';

class Main extends Component {
  render() {
    return (
      <div className='container'>
        <main>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/philosophy' component={Philosophy}/>
            <Route path='/projects' component={Portfolio}/>
            <Route path='/people' component={People}/>
            <Route path='/d2u' component={D2U}/>
            <Route path='/sleepover' component={Sleepover}/>
            <Route path='/hat' component={Hat}/>
            <Route path='/news' component={News}/>
            <Route path='/blog' component={Blog}/>
            <Route path='/careers' component={Careers}/>
            <Route path='/contact' component={ContactUs}/>
          </Switch>
          </main>
      </div>
    );
  }
}

export default Main;