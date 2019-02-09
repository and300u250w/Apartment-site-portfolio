import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div style={{
  color: 'white', 
  background: 'grey',
  padding: '15px 10px',
  display: 'inline-flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '100%',
  transform: 'translate(-50%, -50%)'
}}>
  {text}
</div>;
 
class GoogleApiWrapper extends Component {
  static defaultProps = {
    center: {
      lat: 50.089001,
      lng: 19.979553
    },
    zoom: 15
  };
 
  render() {
    return (
      
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
     
        >
        <AnyReactComponent 
          lat={50.089001} 
          lng={19.979553} 
          text={'WRO'} 
        />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default GoogleApiWrapper;