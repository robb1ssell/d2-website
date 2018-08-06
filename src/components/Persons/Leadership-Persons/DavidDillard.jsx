import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class DavidDillard extends Component {
  render() {
    return (
      <div className='row'>
        <img 
          src="https://lh3.googleusercontent.com/Yibfvke12f_v9ipti51T0uUqBm5QjDzZEqVO0eRiVqbkfwbMYtYQY1jPuCDE12BV3VTqs1SgGBmKclquCNTnrioCwusB3lD_Sz-dIxhceIlVvjVP2oy7YLaovtOelWqmFCaR01F-ZvLH2Fy7bEBy0Y7H7SbZJiVS88tPwS7Kbao_Kd0MN90UIXHRCfXvwoIMdrTlmlFAwA4WwDIFgasKXp589ATDtu9Kkkb1YI8fsYkeq-pe9jEz2DcNNGPUFRt1UbejIbGQM8KGZLB4bnbKMxipTx8STFABHsl3OQN4qOm2bbcu0WIE3OCzbRvTmK6KkOs9OY7nJzzJzzdt_UBQBXubeHHepNPhEy0OZ9S4UDuDcEo7Ow1dfi652iU2LRuDByAXYgaUHgmxYOp9uwBg4nPSRp2eJbiZ-qxE6baQXgU59GE7_a4QmTfphZID3FEoTSSzjzn0GaBTGtSIUbTv7DWtrt3E-h3hNF33PlrVqUEIf9CiOrTez1Rl3mjUfIzQLuv-2h3Lk88eejPH8cE_NiGq3gMxvuDxiwhJY2RRtT-IVIIGH9_j9RuwdF8DCcJNdzfX99BYJakE5lM9eUMgr3hMQsWyTp4-NbqsRk4=w338-h191-no"
          alt="David Dillard Picture"
        />

        <h5>David Dillard, FAIA</h5>
        <h6>Principal</h6>

        <p>
          David’s contribution to senior living architecture started in Dallas in the 1990’s 
          and accelerated greatly when he designed Edgemere in 1998. Since then he has designed 
          one award-winning community after another. Although he is often on the dais of national 
          and regional conventions (Leading Age, AIA, ULI, APA, Environments for Aging, et al) 
          he has taken a life-long vow never to leave the drawing board.
        </p>

        <Link
          to='/people/leadership'
        >
          Back to Leadership
        </Link>
      </div>
    );
  }
}

export default DavidDillard;