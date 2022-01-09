import React, { useState } from "react";
import "./App.css";
import Listing from './components/Listing';
import data from './components/etsy';

function App() {
  return (
    <div className="listing">
      <Listing items={data} />
    </div>
  );
}

export default App;
