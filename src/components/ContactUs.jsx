import React, { Component } from 'react';

class ContactUs extends Component {
  render() {
    return (
      <div className='col-md-6'>
        <h1>Contact Us</h1>
        <img 
          src="https://lh3.googleusercontent.com/D2l_v_mXeW0SWqI02EutTkG9zQhjjkn3Wa1aoINbmulxEJTLCe_cUcxKZC-NJuflQzxzMQA7sQgpmqrxesfoTf_Pog61ue3wPiU12QioDRs0FgXdg3yEQhWMjXiXSJCoG1ysbnPlD9FAttL3yBB-_7hbYDKH9Ok4Ul8ojVcFhRz4rFyNsCk2-OngPWVo-eVVyw597e8nl-ftoP2QN3WCG3FTYMPVMb_5IaLbKKU1BRA_DX6kV6zrYfqUhSfo2RTktsMHoLPVcYOSe2RFdyq0gqOE7mDMAZX5opEF5tu-VJz9qZlrVKqFeZp-ICqB3gXiPswRr42OQjRvgOvoxKHKZ9Ga28ry3t35EA5zF5KCiNOA6GbAlQG3Biy15s-E4mOL8DaEiDM2prOEq9lDptqWX_pH-bSAOZXB46gW-H9aTWRFwbGoZne6NVah5QpfUqQsgEUEfvLxNjP-20ZGPazOBzEEvLEPQE6LqLFg8Em-gr9yqFX-BqRTTdCCAx09UqzZUe_RDuPT5LWz6N3sLzgWafvhA0ElMitCLvdk_U9Eho_uKwW7lu21aD57lfmobrG7gDWIzHZwyKy6iG8hgOsOTsdu0ab124H9aGwdUSg=w500-h333-no" 
          alt="D2 Group Photo"
          className='fit-image'
        />

        <div className='center-text'>
          <div className='spacing'>
            D2 Architecture, LLC <br/>
            2001 North Lamar Street, Suite 300 <br/>
            Dallas, TX 75202
          </div>
          <div>
            <a href="https://goo.gl/maps/Qb8oKvL5L7G2">View on Map</a>
          </div>
          <div className='spacing'>
            Phone: 214.220.1800
          </div>
          <div className='spacing'>
            Fax: 214.220.1818
          </div>
          <div className='spacing'>
            Email: info@d2architecture.com
          </div>
        </div>

        <form action="mailto:robertb.webdev@gmail.com" method='post'>
          <input 
            type="text" 
            name="name" 
            id="name"
            maxLength='50'
            placeholder='Name'
          />
          <input 
            type="text" 
            name="email" 
            id="email"
            maxLength='50'
            placeholder='E-Mail Address'
          />
          <input 
            type="text" 
            name="phone" 
            id="phone"
            maxLength='12'
            placeholder='Phone Number'
          />
          <textarea 
            name="message" 
            id="message" 
            cols="30" 
            rows="10"
            maxLength='1000'
            placeholder='Message'
          >
          </textarea>
          <center>
            <input type="submit" value='Submit'/>
          </center>
        </form>
      </div>
    );
  }
}

export default ContactUs;