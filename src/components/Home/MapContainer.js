import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapStyles = [
	{
    "featureType": "all",
    "elementType": "all",
    "stylers": [{ "visibility": "on" }]
  },
  {
    "featureType": "all",
    "elementType": "labels",
    "stylers": [{ "visibility": "off"}]
  },
  {
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": [{ "visibility": "off"}, {"color": "#ffffff"}]
  },
  {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": [
      { "color": "#000000"},
      {"lightness": 13},
      { "visibility": "off"}
    ]
  },
  {
    "featureType": "all",
    "elementType": "labels.icon",
    "stylers": [{ "visibility": "off"}]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [{"color": "#000000"}]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {"color": "#144b53"},
      {"lightness": 14},
      {"weight": 1.4}
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [{"color": "#08304b"}]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {"color": "#0c4152"},
      {"lightness": 5}
    ]
  },
  {
    "featureType": "road",
    "elementType": "all",
    "stylers": [
      {"visibility": "on"},
      {"saturation": "-68"},
      {"gamma": "0.00"},
      {"lightness": "-12"},
      {"weight": "1"},
      {"hue": "#ff0000"}
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [{"color": "#000000"}]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [{"color": "#0b434f"},{"lightness": 25}]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [{"color": "#000000"}]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.stroke",
    "stylers": [
      {"color": "#0b3d51"},
      {"lightness": 16}
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [{"color": "#000000"}
    ]
  },
  {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [{"color": "#146474"}
    ]
  },
  {
    "featureType": "water",
    "elementType": "all",
    "stylers": [{"color": "#021019"}]
  }
];

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 52.5248058, lng: 13.3459398 }}
    options={{ styles: MapStyles }}
  >
    <Marker position={{ lat: 52.5248058, lng: 13.3459398 }} />
  </GoogleMap>
))

export default MyMapComponent