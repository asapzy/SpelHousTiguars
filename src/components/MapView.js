import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import Map, { Source, Layer } from "react-map-gl";
import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from "react-leaflet";
import mapInfo from "../data/mapData";

export default function MapView() {
  //  latitude of San Francisco, CA, USA is 37.773972, and the longitude is -122.431297
  const position = [37.773972, -122.431297];
  const [mapData, setMapData] = useState({});
  const urlPrefix = "https://cors-anywhere.herokuapp.com/";
  const corsPrefix = "https://dry-caverns-88992.herokuapp.com/";
  useEffect(() => {
    fetch(`http://localhost:5000/data`, {
      headers: {
        Origin: corsPrefix,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMapData(data);
        console.log(`Data: ${data}`);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(mapData);
  }, []);
  return (
    <MapContainer id="map" center={position} zoom={14} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup className="popup">
          <img src="https://images.unsplash.com/photo-1508162172419-c47fcdf7d2ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="Here"/>
          <img src="https://images.unsplash.com/photo-1508162172419-c47fcdf7d2ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="Here"/>
          <img src="https://images.unsplash.com/photo-1508162172419-c47fcdf7d2ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="Here"/>
          <img src="https://images.unsplash.com/photo-1508162172419-c47fcdf7d2ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="Here"/>
          <img src="https://images.unsplash.com/photo-1508162172419-c47fcdf7d2ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="Here"/>
          <img src="https://images.unsplash.com/photo-1508162172419-c47fcdf7d2ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="Here"/>
          <img src="https://images.unsplash.com/photo-1508162172419-c47fcdf7d2ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="Here"/>
          <img src="https://images.unsplash.com/photo-1508162172419-c47fcdf7d2ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="Here"/>
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
