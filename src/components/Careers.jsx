import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery'
import careerPageImages from '../data/careerPageImages'
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

class Careers extends Component {
  state = {
    autoPlay: true,
    showFullscreenButton: false,
    showThumbnails: false,
    showGalleryFullscreenButton: false,
    showPlayButton: false,
    showGalleryPlayButton: false,
    showNav: false,
    slideDuration: 450,
    slideInterval: 7000,
  }
  render() {
    return (
      <div className='row'>
        <div className="col-sm-12">
          <h1>Careers</h1>

          <ImageGallery
            items={careerPageImages}
            showThumbnails={this.state.showThumbnails}
            showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
            showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
            showThumbnails={this.state.showThumbnails}
            showIndex={this.state.showIndex}
            showNav={this.state.showNav}
            slideDuration={parseInt(this.state.slideDuration)}
            slideInterval={parseInt(this.state.slideInterval)}
            autoPlay={this.state.autoPlay}
          />

          <strong>
            ** D2 Architecture does not currently have any openings available, 
            but we welcome any resumés for future consideration.
          </strong>
          <hr/>
          <p>
            D2 Architecture is an architectural design firm that specializes in 
            Senior Living (SL) Architecture. In fact, it’s all we do. From our 
            open-studio office in Dallas, we take the demand for our deep portfolio 
            (Hospitality/Healthcare/Residential design that create a senior living community) 
            nationally across Texas and multiple States from California to Florida.
          </p>
          
          <h5>Minimum requirements for application include:</h5>
            <ul>
              <li>Architectural degree</li>
              <li>Proficiency in Revit Architecture</li>
              <li>Architectural license or in A.R.E. process</li>
              <li>Photoshop, Illustrator, or other presentation software a plus</li>
              <li>Ability for occasional business travel</li>
              <li>Creativity for design, materials and construction</li>
              <li>Strong work ethic</li>
              <li>40 hour standard work-week with occasional overtime</li>
              <li>Eligible to work in the United States</li>
            </ul>

          <strong>
            For more information and job descriptions, please contact 
            Brandon Criner, bcriner@d2architecture.com.
          </strong>

          <hr/>

          <h4>Benefits</h4>
          <hr/>
          <p className='space-below'>
            Not only has our portfolio grown to encompass some of the most 
            progressive senior living projects in the country, we have grown. 
            Our staff continues to grow in numbers and aptitude, cultivating 
            among the most passionate, talented architects dedicated to 
            advancing communities for seniors. Much of our passion is a …
          </p>

          <p className='spacing space-below'>
            <strong>
              Here's what a few of our staff had to say:
            </strong>
          </p>


          <h4>Sterling Smith</h4>
          <hr/>
          <p className='space-below'>
            D2 gave me an opportunity to feel like I was really giving back. 
            My mother was declared fully disabled in 2008 (Multiple Sclerosis) 
            and since then I’ve been very aware of the need for accessibility 
            and, especially, senior housing. Prior to coming here, I’d worked 
            in offices large (700+) and …
          </p>

          
          <h4>Siobhan Winfrey</h4>
          <hr/>
          <p className='space-below'>
            What I like about D2: The ability to “wear many hats” Constantly 
            learning and constantly being challenged Our clients, we have the 
            best in the industry Our team - David, our professional staff and 
            consultants - care about the success of the design beyond construction completion
          </p>

          <h4>Nathan Sheppard</h4>
          <hr/>
          <p className='space-below'>
            What attracted me to D2 was the open office setting.  It is really 
            a level playing field here and the range of opportunity for a new 
            graduate like myself is surprisingly large.  I feel like I am on 
            the front lines of my projects which has included everything from 
            sitting …
          </p>

        </div>
      </div>
    );
  }
}

export default Careers;