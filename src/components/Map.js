import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import '../styles/main.css';
import LocationSearch from './LocationSearch';
import '../styles/main.css';


export class MapContainer extends Component{
  constructor(props) {
    super(props)

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
  }
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

    
  render() {
    return (
      <div className="map-box"
      // style={{width: '60%', height: 'auto'}}
      >

        <LocationSearch />
          
          <div className="whole">
            {/* <img id="tardis" src={tardis} alt=""
            style={{width: 'auto', height: '90%', marginLeft: 'auto',
            marginRight: 'auto'}} */}
            
          

        <Map google={this.props.google} zoom={14}
        // style={{width: '60%', height: '70%', marginLeft: 'auto',
        // marginRight: 'auto', marginTop: 'auto'}}
        className="map"
        initialCenter={{
          lat: 40.2269933,
          lng: -111.6593407
        }}
        
        >
      
        
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />

          <InfoWindow marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
        </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDkOrf2-xsJyDRcPih8aBJ8z6yAh1R_owU")
})(MapContainer)