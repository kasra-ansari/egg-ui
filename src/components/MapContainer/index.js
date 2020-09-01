import React, {Component} from "react";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const position = [35.760279, 51.373776]

class MapContainer extends Component {
    render() {
        return (
            <section id="map-section">
                <div id="wrapper">
                    <div id="map_canvas" style={{overflow: 'hidden', position: 'relative', width: '100%'}}>
                        <Map center={position} zoom={13} style={{height: '100vh', zIndex: 1}}>
                            <TileLayer
                                url='https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2FzcmFhbnNhcmkiLCJhIjoiY2tlaW10bjhxMWxibTJxbjd6bWJjMWpzayJ9.I8yly6kpwj7rfMulJM_C1g'
                                // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                                // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                                crossOrigin={true}
                            />
                            <Marker position={position}>
                            <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                        </Marker>
                        </Map>
                    </div>
                </div>
            </section>
        )
    }
    
}

export default MapContainer;