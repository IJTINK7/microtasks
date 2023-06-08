import React, {useState} from 'react';
import './App.css';
// import {Header} from "./01-site/Header";
// import {Body} from "./01-site/Body";
// import {Footer} from "./01-site/Footer";
import {NewComponent} from "./02-map/NewComponent";
import {TopCars} from "./02-map/TopCars";

function App() {
    // 02-map data
    // const [students, setStudents] = useState([
    //         {id: 1, name: "James", age: 8},
    //         {id: 2, name: "Robert", age: 18},
    //         {id: 3, name: "John", age: 28},
    //         {id: 4, name: "Michael", age: 38},
    //         {id: 5, name: "William", age: 48},
    //         {id: 6, name: "David", age: 58},
    //         {id: 7, name: "Richard", age: 68},
    //         {id: 8, name: "Joseph", age: 78},
    //         {id: 9, name: "Thomas", age: 88},
    //         {id: 10, name: "Charles", age: 98},
    //         {id: 11, name: "Christopher", age: 100},
    //     ]
    // )
    //
    // const topCars = [
    //     {manufacturer:"BMW", model:'m5cs'},
    //     {manufacturer:"Mercedes", model:'e63s'},
    //     {manufacturer:"Audi", model:'rs6'}
    // ]
  return (
    <div className="App">
        <button>MyYouTubeChannel-1</button>
        {/*01-site data */}
        {/*<Header titleForHeader={"NEW HEADER"}/>*/}
        {/*<Body titleForBody={"NEW BODY"}/>*/}
        {/*<Footer titleForFooter={"NEW FOOTER"}/>*/}
        {/*------------------------------------------------*/}
        {/*02-map data*/}
        {/*<NewComponent students={students}/>*/}
        {/*<TopCars topCars={topCars}/>*/}
    </div>
  );
}

export default App;
