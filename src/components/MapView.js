import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import Map, { Source, Layer } from "react-map-gl";
import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from "react-leaflet";
import mapInfo from "../data/mapData"

export default function MapView() {
  //  latitude of San Francisco, CA, USA is 37.773972, and the longitude is -122.431297
  const position = [37.773972, -122.431297];
  const [mapData, setMapData] = useState([{}]);
  const urlPrefix = "https://cors-anywhere.herokuapp.com/";
  const corsPrefix = "https://dry-caverns-88992.herokuapp.com/";
  useEffect(() => {
    fetch(`http://localhost:5000/data`)
      .then((res) => res.json())
      .then((data) => {
        setMapData(data);
        console.log(`Data: ${data}`);
      });
  }, []);
  return (
    <MapContainer id="map" center={position} zoom={14} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <GeoJSON attribution="&copy; credits due..." data={mapInfo} />
    </MapContainer>
    // <Map
    //   initialViewState={{
    //     longitude: -122.4,
    //     latitude: 37.8,
    //     zoom: 6,
    //   }}
    //   style={{ width: 600, height: 400 }}
    //   mapStyle="mapbox://styles/mapbox/streets-v9"
    //   mapboxAccessToken="sk.eyJ1IjoiemFyY2hpYmFsZDEwMSIsImEiOiJjbDFpcTRmd2kwazluM2lvOWttZjFxNmZsIn0.FRuiJ9SqYWrzbrQ0rWwSuw"
    // >
    //   {/* <Source type="geojson"></Source> */}
    // </Map>
  );
}
