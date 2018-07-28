import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery'
import homePageImages from '../data/homePageImages'
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

class Home extends Component {
  state = {
    autoPlay: false,
    showFullscreenButton: false,
    showGalleryFullscreenButton: false,
    showPlayButton: false,
    showGalleryPlayButton: false,
    showNav: false,
    slideDuration: 1000,
    slideInterval: 6000,
  }
  render() {
    return (
      <div id="home-content" className="row">
        <div id="home-page-gallery" className="col-sm-12">
          <ImageGallery
            items={homePageImages}
            showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
            showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
            showThumbnails={this.state.showThumbnails}
            showIndex={this.state.showIndex}
            showNav={this.state.showNav}
            slideDuration={parseInt(this.state.slideDuration)}
            slideInterval={parseInt(this.state.slideInterval)}
            autoPlay={this.state.autoPlay}
          />
        </div>

        <div id="firm-info" className="col-sm-12 center-text">
          <h5>Firm Information</h5>
          <p>
            D2 Architecture is an architectural design firm that specializes in Senior Living (SL) Architecture. 
            In fact, it’s all we do. From our open-studio office in Dallas, we take the demand for our deep portfolio 
            (Hospitality/Healthcare/Residential design that create a senior living community) nationally across Texas 
            and multiple States from California to Florida.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;