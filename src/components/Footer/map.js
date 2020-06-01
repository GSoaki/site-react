import React,{Component} from 'react';

import { Map, GoogleApiWrapper } from 'google-maps-react';

const key = 'AIzaSyDH1VsFQe3FxvOvCTRSeVAq_sst2k6lQbA'

export class MapContainer extends Component {
  
    render(){

        return (
            <Map
                google={this.props.google}
                zoom={17}
                style={{height:400,width:400}}
                initialCenter={{ lat: -25.469884, lng: -49.318243}}
            >
    
            </Map>
        );
    }
  

}

export default GoogleApiWrapper({
    apiKey: (key)
})(MapContainer)