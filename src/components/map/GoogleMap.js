import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export function GoogleMap(props) {

    return (
      <Map google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );

}

export default GoogleApiWrapper({
  apiKey: apiKey: 'AIzaSyA7PogTaDvIRVW8jHj-st3fefaZdB72iiE'
})(GoogleMap)
