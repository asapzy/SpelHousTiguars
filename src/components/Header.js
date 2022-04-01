import React from "react";
import logo from "../logo.svg";
import "../App.css"
import SearchBar from "./SearchBar";
import ImageArray from "./ImageArray";

export default function Header() {
  return (
    <>
      <header className="App-header">
          <h1>San Fransciso Virtually Preserved</h1>
          <SearchBar />
          <ImageArray />
      </header>
    </>
  );
}
