import React from 'react';
import './App.css';
import {Header} from "./01-site/Header";
import {Body} from "./01-site/Body";
import {Footer} from "./01-site/Footer";

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
