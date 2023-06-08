import React from "react";
// import React, {MouseEvent} from "react";
// import React, {useState} from 'react';
import './App.css';
import {Button} from "./03-button/components/Button";
// import {Header} from "./01-site/Header";
// import {Body} from "./01-site/Body";
// import {Footer} from "./01-site/Footer";
// import {NewComponent} from "./02-map/NewComponent";
// import {TopCars} from "./02-map/TopCars";

function App() {
    // 02-map-data
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
    // 03-button-data
    // const myFirstSubscriber =(event: MouseEvent<HTMLButtonElement>) => {
    //     console.log("Hello, my name is Anton!")
    // }
    // const mySecondSubscriber =(event: MouseEvent<HTMLButtonElement>) => {
    //     console.log("Hello, my name is Valera!")
    // }
    // const onClickHandler = (event: MouseEvent<HTMLButtonElement>, name: string) => {
    //     console.log(`Hello, my name is ${name}`)
    // }
    // const foo1=()=>{
    //     console.log("Nothing")
    // }
    // const foo2=(sentNumber: number)=>{
    //     console.log(sentNumber)
    // }
    // const onClickHandler = (event: MouseEvent<HTMLButtonElement>, name: string) => {
    //     console.log(`Hello, my name is ${name}`)
    // }
    const Button1Foo = () =>{
        console.log(`Hello, my name is Alex`)
    }
    const Button2Foo = () =>{
        console.log(`Hello, my name is Roma`)
    }
    const Button3Foo = (name: string) =>{
        console.log(`Hello, my name is ${name}`)
    }
    const Button4Foo = (name: string) =>{
        console.log(`Hello, my name is ${name}`)
    }
  return (
    <div className="App">
        {/*03-button-data*/}

        {/*<button onClick={(event)=>{console.log("Hello")}}>MyYouTubeChannel-0</button>*/}
        {/*<button onClick={(event)=>{onClickHandler(event, "Anton")}}>MyYouTubeChannel-1</button>*/}
        {/*<button onClick={(event)=>{onClickHandler(event, "Valera")}}>MyYouTubeChannel-2</button>*/}
        {/*<button onClick={foo1}>1</button>*/}
        {/*<button onClick={()=>foo2(100200)}>2</button>*/}
        <Button title={"MyYouTubeChannel-1"} callBack={Button1Foo}/>
        <Button title={"MyYouTubeChannel-2"} callBack={Button2Foo}/>
        <Button title={"MyYouTubeChannel-3"} callBack={()=>Button3Foo("Anton")}/>
        <Button title={"MyYouTubeChannel-4"} callBack={()=>Button4Foo("Valera")}/>

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
