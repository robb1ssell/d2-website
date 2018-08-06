import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class DavidDillard extends Component {
  render() {
    return (
      <div className='row'>
        <div className="col-sm-12">
          <img
            src='https://lh3.googleusercontent.com/6e1edjtL-jX2wPhFAiuzfKyNQQStGE9qIe7hXLo_hTWSn8kTSbyJtbv-gwiCYkA0hTFOspjiHse_G3ifzRxEe06MlVV6ykrwtKlJvopRycgbhKC2egMTpsQSEyAZExxoGXp8l7Tj3o-uKZNnQqqRHwPwAc1a-dQXm3iSCQn_yo0Ss-kkW7vRv3xSz2iq2wQK4K59HuD5uYs0mNJNo6dF8DhjqHkU2G9BtlSqDJa-WpzGa81K7L1HgUoehRCcK_axFfLBfBdh8i316OyRQqpr_sMAtnoJ0jGT-QoIIHoDx53RUy9nuT1mGbwFF78aY5_UZKhkPVHdEoj1XjI8sncGNrJxs2wmebElqObpUJxN8mhIMGudxQPPkby57MHbb9OVk2B6KPlcHaO-uMvSiKqcsdoGrZo26_i7RKz8aWDBsPcB7322X7ACbSU5rNS3H65Zf2fJ7uLRb-8Wqda4v-2niHBjLEqb22nSBDal0jULhCIN-HPyHvI2mjkmKDpC38AdtinLMB-YFOuGlyrlCAGxdFngIIyox2U9BE88UHNHGKOSnfR3ZQtP30gCJn8h0RB-PMFJzu7YY228ykUCpOgyuAxYbc7PqfvQXQX8m58=w750-h500-no' 
            alt="David Dillard Picture"
            className='person-larger'
          />

          <h5>David Dillard, FAIA</h5>
          <h6>Principal</h6>

          <p className='bio'>
            David’s contribution to senior living architecture started in Dallas in the 1990’s 
            and accelerated greatly when he designed Edgemere in 1998. Since then he has designed 
            one award-winning community after another. Although he is often on the dais of national 
            and regional conventions (Leading Age, AIA, ULI, APA, Environments for Aging, et al) 
            he has taken a life-long vow never to leave the drawing board.
          </p>

          <Link to='/people/leadership'>Back to Leadership</Link>
        </div>
      </div>
    );
  }
}

export default DavidDillard;