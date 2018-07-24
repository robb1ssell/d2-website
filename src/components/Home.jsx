import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery'
import homePageImages from '../data/homePageImages'
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

class Home extends Component {
  render() {
    return (
      <div id="home-page-gallery">
          <ImageGallery
            items={homePageImages}
          />
      </div>
    );
  }
}

export default Home;