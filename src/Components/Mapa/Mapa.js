import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Card } from 'react-bootstrap';
import './Mapa.css';
class Mapa extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

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

  render () {
    return (
      <div className='mapa'>
          <Card style={{ width: '100%', height: '500px', position: 'relative' }}>
            <Map google={this.props.google} 
            initialCenter={{
              lat: 14.601086183905373,
              lng: -90.52471786737443
            }}
            zoom={19}>
              <Marker onClick={this.onMarkerClick}
                name={'Repuestos Grupo Los Tres'}
                title={'Repuestos Grupo Los Tres'}
                // icon={{
                //   url: 'http://www.grupolostres.com/wp-content/uploads/2019/01/grupolostreslogo.png',
                //   anchor: new google.maps.Point(32,32),
                //   scaledSize: new google.maps.Size(64,64)
                // }}
              />
              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}>
                  <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                  </div>
              </InfoWindow>
              </Map>
          </Card>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDYykqQK_XiOdLb3H--D4oCM85ZxbOSXcU')
})(Mapa)
