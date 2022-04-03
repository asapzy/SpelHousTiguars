import React from "react";
import "../App.css";
import Map, { Source, Layer } from "react-map-gl";
import mapData from "../data/mapData";

export default function MapView() {
  return (
    <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 6,
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken="sk.eyJ1IjoiemFyY2hpYmFsZDEwMSIsImEiOiJjbDFpcTRmd2kwazluM2lvOWttZjFxNmZsIn0.FRuiJ9SqYWrzbrQ0rWwSuw"
    >
      <Source type="geojson" data={mapData}></Source>
    </Map>
  );
}
