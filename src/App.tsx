import React from 'react';
import './App.css';
import {Header} from "./site-01/Header";
import {Body} from "./site-01/Body";
import {Footer} from "./site-01/Footer";

function App() {
  return (
    <div className="App">
      <Header title={"NEW BODY"}/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
