import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';

class People extends Component {
  render() {
    return (
      <div className='row'>
        <div className="col-sm-12">
        <div className="link">
          <Link to='/people/leadership'>Leadership</Link>
        </div>
        <div className="link">
          <Link to='/people/staff'>Staff</Link>
        </div>
        <div className="link">
          <Link to='/people/spotlight'>Spotlight</Link>
        </div>
        </div>
      </div>
    );
  }
}

export default People;