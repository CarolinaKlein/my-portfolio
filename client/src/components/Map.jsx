import React from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow, } from "@react-google-maps/api"
import { useState } from "react";


const containerStyle = {
    width: "100vw",
    height: "100vh"
}
const center = {
    lat: 39.56939, lng: -40.0000
}
const options = {
    disableDefaultUI: true,
    gestureHandling: 'none',
    zoomControl: false,
    scaleControl: false,
    zoomControlOptions: false,
    scrollwheel: false,
    panControl: false,
}
let markers = [
    {
        coords: { lat: 39.56939, lng: 2.65024 },
        content: "<h1>Palma, IB </h1>",
        // icon: '<i class="fas fa-map-pin"></i>'
    },
    {
        coords: { lat: 25.7602, lng: -80.1959 },
        content: "<h1>Miami, FL </h1>",
        icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    },
    {
        coords: { lat: 40.8092, lng: -73.8011 },
        content: "<h1>Bronx, NY</h1>"
    },
    {
        coords: { lat: 39.9526, lng: -75.1652 },
        content: "<h1>Philadelphia, PA </h1>",
        icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    },
    {
        coords: { lat: 32.7765, lng: -79.9311 },
        content: "<h1>Charleston, SC </h1>",
        icon: 'pin.svg'
    },
    {
        coords: { lat: 40.3670, lng: -3.6061 },
        content: "<h1>Madrid, MD </h1>",
        label: "Madrid"
    },
    {
        coords: "",
        content: "<h1>ARHC</h1>",
        label: "AR Homes"
    }
];

function Map() {

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    });
    
    const [selected, setSelected] = useState(null);

    if (loadError) return "Error";
    if (!isLoaded) return "Loading Map"

    return (
        <div>
            <GoogleMap mapContainerStyle={containerStyle} zoom={3.5} center={center} options={options}>
                {markers.map(marker => 
                    <Marker
                        key="[i]"
                        position={marker.coords}
                        icon={marker.icon}
                    > 
                        <InfoWindow>
                            <div>
                                <h2>
                                    I lived here
                                </h2>
                            </div>
                        </InfoWindow>
                    </Marker>
                    )}
            </GoogleMap>
        </div>
    )
}

export default Map;