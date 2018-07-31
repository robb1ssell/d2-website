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

        </div>
      </div>
    );
  }
}

export default Careers;