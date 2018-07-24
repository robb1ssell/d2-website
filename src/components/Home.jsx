import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery'
import homePageImages from '../data/homePageImages'
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

class Home extends Component {
  state = {
    autoPlay: true,
    showFullscreenButton: false,
    showGalleryFullscreenButton: false,
    showPlayButton: false,
    showGalleryPlayButton: false,
    showNav: false,
    slideDuration: 1000,
    slideInterval: 4000,
  }
  render() {
    return (
      <div id="home-page-gallery">
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
    );
  }
}

export default Home;