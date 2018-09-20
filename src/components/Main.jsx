import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
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
import Leadership from './Persons/Leadership';
import DavidDillard from './Persons/Leadership-Persons/DavidDillard';
import DougBissell from './Persons/Leadership-Persons/DougBissell';
import D2USummary from './D2USummary';

class Main extends Component {
  render() {
    return (
      <div className='container'>
        <main>
          <Switch>
            <Redirect from='/d2-website' to='/'/>
            <Route exact path='/' component={Home}/>
            <Route path='/philosophy' component={Philosophy}/>
            <Route path='/projects' component={Portfolio}/>
            <Route exact path='/people' component={People}/>
            <Route exact path='/people/leadership' component={Leadership}/>
            <Route exact path='/people/leadership/david-dillard' component={DavidDillard}/>
            <Route exact path='/people/leadership/doug-bissell' component={DougBissell}/>
            <Route exact path='/d2u' component={D2U}/>
            <Route exact path='/d2u/summary' component={D2USummary}/>
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