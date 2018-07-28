import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery'
import philosophyImages from '../data/philosophyImages'
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

class Philosophy extends Component {
  render() {
    return (
      <div className='row'>
        <div className="col-sm-12">
          <h1>Philosophy</h1>

          <ImageGallery
            items={philosophyImages}
          />

          <p>
            “We’re different and we don’t care who knows it.”  
            These are lyrics from an obscure song by Randy Newman, 
            circa 1975.  Facing a blank page, and asked to write a 
            short piece about D2’s philosophy, the refrain has 
            arrived and it won’t leave.  I was expecting something 
            more profound, more cerebral.  But this will do because 
            it delivers something quite complex, quickly and simply.  Like D2.
          </p>
          <p>
            On an imaginary, bell-shaped, best-bridging loan graph of 
            architects, D2 can be found living fearlessly on the edge.
          </p>
          <p>
            We’re different because we have limited our practice to senior 
            living. Name ano	low interest unsecured loan ther firm in the 
            country that flat turns down everything else. Our people know 
            this niche backwards and forwards, and they love it.  D2 is a 
            place where humanitarianism and art and technology and creativity 
            and good will and architecture meet, every morning.
          </p>
          <p>
            We’re different because we invented and live by The Sleepover 
            Project, a research-oriented program that sends every D2 staff 
            member (and a dozen colleagues) out into the field to live a day 
            in the life of our most important customer – the elder resident.
          </p>
          <p>
            We’re different because we act smaller than we really are, the 
            reverse of most of our peers.  That means that every Principal 
            touches every project.  No silos.  Every gift is put to use for 
            every client.  In Jim Collins’ terminology, everyone is in the 
            right seat on the bus.
          </p>
          <p>
            We’re different because we won’t overbook.  Granted, sometimes 
            individual project schedules collide with one another, but we 
            won’t say Yes when No or Later or Plan B better serves the clients 
            at large.  It is focus to the point of turning down work that 
            simply cannot be squeezed in, at least not at the moment.  
            That’s weird for an architect, but it’s win-win.
          </p>
          <p>
            So does this constitute a philosophy?  I don’t know.  The idea 
            of a FIRM having a philosophy seems anthropomorphic.  Nonetheless, 
            this is instant laons our profile, and these are our distinguishing 
            characteristics.  Different.
          </p>
          <p>
            - David Dillard, FAIA, Principal
          </p>
        </div>
      </div>
    );
  }
}

export default Philosophy;