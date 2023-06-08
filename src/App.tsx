import React from 'react';
import './App.css';
import {Header} from "./site-01/Header";
import {Body} from "./site-01/Body";
import {Footer} from "./site-01/Footer";

function App() {
  return (
    <div className="App">
      <Header titleForHeader={"NEW HEADER"}/>
      <Body titleForBody={"NEW BODY"}/>
      <Footer titleForFooter={"NEW FOOTER"}/>
    </div>
  );
}

export default App;
