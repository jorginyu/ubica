import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const API_KEY = 'AIzaSyDWN48voHk9mou2OytndZA8gOPsS077q6s';

const contacts = [
  { name: 'Spiderman', lat: 41.529616, lng: 2.434130 },
  { name: 'Iron Man', lat: 41.528103, lng: 2.433834 },
  { name: 'Hulk', lat: 41.530192, lng: 2.422994 }
];

const MarkersC = (text ) => <div className="contact">{text}</div>;

// const styles = {
//   color: 'white', 
//   background: 'grey',
//   padding: '15px 10px',
//   display: 'inline-flex',
//   textAlign: 'center',
//   alignItems: 'center',
//   justifyContent: 'center',
//   borderRadius: '100%',
//   transform: 'translate(-50%, -50%)'
// };

const handleApiLoaded = (map, maps) => {
  console.log(map);
  console.log(maps);
};

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
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          
          {contacts.map((contact,i) => {
            <MarkersC  position={{lat: contact.lat, lng: contact.lng}} text={contact.name} key={i} />
          })}

        </GoogleMapReact>
      </div>
    );
  }
}