import React, { useEffect, useState } from "react";
import "../App.css";
import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from "react-leaflet";
import mapInfo from "../data/mapData";

export default function MapView() {
  // Position of San Francisco
  const position = [37.773972, -122.431297];
  // District Positions
  const positions = [
    {
      name: "American Indian Cultural District",
      location: [37.763243322937385, -122.42269865931524],
      oldImg: "https://i.ibb.co/fSDSR5V/Original-Indian-Center-on-16th-Street-San-Francisco-Chronicle-1970-06-17-4-1.png",
      newImg: "https://i.ibb.co/NLWxysh/mi4.jpg"
    },
    {
      name: "Sunset Chinese Cultural District",
      location: [37.734083262403665, -122.49857547656885],
      oldImg: "https://i.ibb.co/5L30b7g/Kie1-Colonial-Creamery-2-1140x889.jpg",
      newImg: "https://i.ibb.co/j3WSdBc/download.jpg"
    },
    {
      name: "Japantown Cultural District",
      location: [37.78433226695286, -122.4244838335995],
      oldImg: "https://i.ibb.co/swnp2n2/Hirahara-house-244.jpg",
      newImg: "https://i.ibb.co/HBmbcS5/newjapan.jpg"
    },
    {
      name: "SoMa Pilipinas - Filipino Cultural District",
      location: [37.7755865688895, -122.41868358994635],
      oldImg: "https://i.ibb.co/FWSTnPM/Old-Manilatown001-4525-4c-768x561.jpg",
      newImg: "https://i.ibb.co/5RkjLLk/soma.jpg"
    },
    {
      name: "Castro Cultural District",
      location: [37.76367114413134, -122.43470431359836],
      oldImg: "https://i.ibb.co/f0NrnXb/rawImage.jpg",
      newImg: "https://i.ibb.co/ZWPj0zR/download-1.jpg"
    },
    {
      name: "Leather & LGBTQ Cultural District",
      location: [37.7698150789102, -122.41775319361506],
      oldImg: "https://i.ibb.co/3pMqgLb/Fillmore-redevelopment-by-SF-Redevelopment-Agency-web.jpg",
      newImg: "https://i.ibb.co/nkhXc6x/download.jpg"
    },
    {
      name: "Calle 24 Latino Cultural District",
      location: [37.74831671907797, -122.4105460676303],
      oldImg: "https://i.ibb.co/x5LXMmT/24th-and-Shotwell-1982-Dave-Glass-3624687575-dbf307b3d8-o.jpg",
      newImg: "https://i.ibb.co/ZHwKsbP/download.jpg"
    },
    {
      name: "Compton's Transgender Cultural District",
      location: [37.78434926938542, -122.40930917956707],
      oldImg: "https://i.ibb.co/mh4tX8P/comptons-cafeteria.jpg",
      newImg: "https://i.ibb.co/jLV0jrs/download-1.jpg"
    },
    {
      name: "African American Arts and Cultural District",
      location: [37.734783497043146, -122.37516625415854],
      oldImg: "https://i.ibb.co/3pMqgLb/Fillmore-redevelopment-by-SF-Redevelopment-Agency-web.jpg",
      newImg: "https://i.ibb.co/SXd84wd/download.jpg"
    },
  ];

  // Positions to Marker
  const markerLocations = positions.map((loc) => {
    return (
      <Marker position={loc.location}>
        <Popup className="popup">
          {loc.name}
          <img
            src={loc.oldImg}
            alt={`Old Image of ${loc.name}`}
          />
          <img
            src={loc.newImg}
            alt={`New Image of ${loc.name}`}
          />
        </Popup>
      </Marker>
    );
  });

  return (
    <MapContainer id="map" center={position} zoom={14} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markerLocations}
      <GeoJSON attribution="&copy; credits due..." data={mapInfo} />
    </MapContainer>
  );
}
