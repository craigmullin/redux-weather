import React, { Component } from 'react';

class GoogleMap extends Component {

  // create embedded Google Map...
  // technique to implement 3rd party library that doesn't
  // understand render() or jsx or other react elements 
componentDidMount() {
  new google.maps.Map(this.refs.map, {
    zoom: 12,
    center: {
      lat: this.props.lat,
      lng: this.props.lon
    }
  });
}

  render() {
    return <div ref="map" />
  }
}

export default GoogleMap;