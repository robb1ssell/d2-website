import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class DougBissell extends Component {
  render() {
    return (
      <div className='row'>
        <div className="col-sm-12">
          <img
            src='https://lh3.googleusercontent.com/FDlLNeaY7INovbM3c9_wLsuZMRlVQlqWHR1a9ZczUiMfsnwpEzGkH0MbfD9uWhtsrqKjoU8BugIE57-DRBKbvBS4jhilCpihv8SJ6qotA9v5pfUX5beeuMTFB39j5WzX5tE59DvUs0Cqaqr6WYmw1JNa4RXY-RmkmBADA-2-FSRUe4-XDhZ6EH5-kx0aDpNaBryKDXByNWxlJjQ4xcggUvwSNw_m8_TC4lGYNl2GcZGFAnN4kKGMHyk5lyEILmoQX0RBp27xOWXiGnRN-5ndvK4YTdRZugDhj9Rg8YSiuAXDM2QevRp0V6jhxlFO8sz_MuDnz2a1E6mB0B4iFmdxtFJq1mEZ7FuMQWZpUye4e0x3l6a82l-0oJPeG7GMCtuLelADJZ8KA8Cb4LLqdeyWixmV3f1WovPawu66RB4RHdddP8IAtfN4zJahcR5hiEZ78zjdDvnLgnqePrZC-IFcNbV0JITEodayUO-cBwL7U75SB3LNW5MFnzZKdXP2WkLOihfPM261TvGFOM-9nvbHBbyDHbDyPGchgXu5KvRaVv5ShgdbbcXwdXbd9gpz2OAdU3gtNF04GsdRjKwb39lDhj0o6-J34EE4rkeYsc8=w750-h500-no'            
            alt="David Dillard Picture"
            className='person-larger'
          />

          <h5>Doug Bissell, AIA</h5>
          <h6>Principal</h6>

          <p className='bio'>
            As director of technical architecture, Doug is responsible to clients for delivering 
            excellent projects in the fullest sense of the word – excellence in drawings, excellence 
            in construction phase services, excellence in doing what we say we will do. Doug has 
            worked with David and most of the D2 team since 2004.
          </p>

          <Link to='/people/leadership'>Back to Leadership</Link>
        </div>
      </div>
    );
  }
}

export default DougBissell;