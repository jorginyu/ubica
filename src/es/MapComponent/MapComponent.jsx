import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import API_KEY from '../../key';


if ("geolocation" in navigator) {
  /* la geolocalización está disponible */
  return window.navigator.geolocation.getCurrentPosition(function getCords(pos) {
    let lat = pos.coords.latitude;
    let lng = pos.coords.longitude;
    let mypos = {
      lat: lat,
      lng: lng
    }
  })
} else {
  /* la geolocalización NO está disponible */
  alert('Tu dispositivo no soporta la geolocalización.');
}


console.log(getCords());
var contacts = [
  { name: 'Yo', lat: '', lng: '' },
  { name: '·', lat: 41.529616, lng: 2.434130 },
  { name: '·', lat: 41.528103, lng: 2.433834 },
  { name: '·', lat: 41.530192, lng: 2.422994 }
];

const MarkersC = ({ text }) => <div className="contact">{text}</div>;

export default class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 41.528452,
        lng: 2.434195
      },
      zoom: 18
    }
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="mt-5" style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY, v: '3.31' }}
          center={this.state.center}
          defaultZoom={this.state.zoom}
          //   onChildMouseEnter={this.onChildMouseEnter}
          //   onChildMouseLeave={this.onChildMouseLeave}
          yesIWantToUseGoogleMapApiInternals
        // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          {
            contacts.map((contact, i) =>
              <MarkersC lat={contact.lat} lng={contact.lng} text={contact.name} key={i} />
            )
          }
        </GoogleMapReact>
      </div>
    );
  }
}