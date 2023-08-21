import React, {useState} from "react";
// import React, {MouseEvent} from "react";
// import React, {useState} from 'react';
// import './App.css';
// import {NewComponent} from "./05-filter/NewComponent";
// import {Button} from "./03-button/components/Button";
// import {Header} from "./01-site/Header";
// import {Body} from "./01-site/Body";
// import {Footer} from "./01-site/Footer";
// import {NewComponent} from "./02-map/NewComponent";
// import {TopCars} from "./02-map/TopCars";

export type CurrencyType = 'all' | 'ruble' | 'dollar'
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
    /*------------------------------------------------*/
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
    // const Button1Foo = () =>{
    //     console.log(`Hello, my name is Alex`)
    // }
    // const Button2Foo = () =>{
    //     console.log(`Hello, my name is Roma`)
    // }
    // const Button3Foo = (name: string) =>{
    //     console.log(`Hello, my name is ${name}`)
    // }
    // const Button4Foo = (name: string) =>{
    //     console.log(`Hello, my name is ${name}`)
    // }
    // const Button5Foo = (name: string, age: number) =>{
    //     console.log(`Hello, my name is ${name}. I'm ${age} y.o.`)
    // }
    // const Button6Foo = (name: string, age: number) =>{
    //     console.log(`Hello, my name is ${name}. I'm ${age} y.o.`)
    // }
    // const Button7Foo = () =>{
    //     console.log("I am just a button")
    // }
    /*------------------------------------------------*/

    // {/*04-useState-data*/}

    // let [initialNumber, setInitialNumber] = useState(1);
    // const onClickHandler = () => {
    //     setInitialNumber(initialNumber + 1)
    //     console.log(initialNumber+1)
    // }
    // const resetState = () => {
    //     setInitialNumber(0)
    // }

    // 05-filter-data
    // const [money, setMoney] = useState([
    //     {banknote: 'dollar', nominal: 100, number: ' a1234567890'},
    //     {banknote: 'dollar', nominal: 50, number: ' z1234567890'},
    //     {banknote: 'ruble', nominal: 100, number: ' w1234567890'},
    //     {banknote: 'dollar', nominal: 100, number: ' e1234567890'},
    //     {banknote: 'dollar', nominal: 50, number: ' c1234567890'},
    //     {banknote: 'ruble', nominal: 100, number: ' r1234567890'},
    //     {banknote: 'dollar', nominal: 50, number: ' x1234567890'},
    //     {banknote: 'ruble', nominal: 50, number: ' v1234567890'},
    // ])
    // const [filter, setFilter] = useState("all");
    //
    // let currentMoney = money;
    // if(filter === "ruble"){
    //     currentMoney = money.filter(el=>el.banknote === "ruble")
    // }
    // if(filter === "dollar"){
    //     currentMoney = money.filter(el=>el.banknote === "dollar")
    // }
    // const onClickFilterHandler = (currency: CurrencyType) => {
    //     setFilter(currency)
    // }
    // For final task 05-filter-data
    // const onClickFilter = (currency: CurrencyType) => {
    //   setFilter(currency)
    // }

    {/*------------------------------------------------*/}
    {/*06-input*/}
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
        ]
    )

  return (
    <div className="App">
        {/*01-site data */}
        {/*<Header titleForHeader={"NEW HEADER"}/>*/}
        {/*<Body titleForBody={"NEW BODY"}/>*/}
        {/*<Footer titleForFooter={"NEW FOOTER"}/>*/}
        {/*------------------------------------------------*/}
        {/*02-map data*/}
        {/*<NewComponent students={students}/>*/}
        {/*<TopCars topCars={topCars}/>*/}
        {/*------------------------------------------------*/}
        {/*03-button-data*/}
        {/*<button onClick={(event)=>{console.log("Hello")}}>MyYouTubeChannel-0</button>*/}
        {/*<button onClick={(event)=>{onClickHandler(event, "Anton")}}>MyYouTubeChannel-1</button>*/}
        {/*<button onClick={(event)=>{onClickHandler(event, "Valera")}}>MyYouTubeChannel-2</button>*/}
        {/*<button onClick={foo1}>1</button>*/}
        {/*<button onClick={()=>foo2(100200)}>2</button>*/}
        {/*<Button title={"MyYouTubeChannel-1"} callBack={Button1Foo}/>*/}
        {/*<Button title={"MyYouTubeChannel-2"} callBack={Button2Foo}/>*/}
        {/*<Button title={"MyYouTubeChannel-3"} callBack={()=>Button3Foo("Anton")}/>*/}
        {/*<Button title={"MyYouTubeChannel-4"} callBack={()=>Button4Foo("Valera")}/>*/}
        {/*<Button title={"MyYouTubeChannel-5"} callBack={()=>Button5Foo("Sergey", 25)}/>*/}
        {/*<Button title={"MyYouTubeChannel-6"} callBack={()=>Button6Foo("Andrew", 33)}/>*/}
        {/*<Button title={"MyYouTubeChannel-7"} callBack={Button7Foo}/>*/}

        {/*------------------------------------------------*/}

        {/*04-useState-data*/}
        {/*<h1>{initialNumber}</h1>*/}
        {/*<button onClick={onClickHandler}>Increase</button>*/}
        {/*<button onClick={resetState}>Reset</button>*/}

        {/*------------------------------------------------*/}

        {/*05-filter-data*/}
        {/*    <ul>*/}
        {/*        {currentMoney.map((el, index) => {*/}
        {/*            return (*/}
        {/*                <li key={index}>*/}
        {/*                    <span> {el.banknote}</span>*/}
        {/*                    <span> {el.nominal}</span>*/}
        {/*                    <span> {el.number}</span>*/}
        {/*                </li>*/}
        {/*            )*/}
        {/*        })}*/}
        {/*    </ul>*/}
        {/*<div style={{marginLeft:"35px"}}>*/}
        {/*    <button onClick={()=> onClickFilterHandler("all")}>All</button>*/}
        {/*    <button onClick={()=> onClickFilterHandler("ruble")}>Ruble</button>*/}
        {/*    <button onClick={()=> onClickFilterHandler("dollar")}>Dollar</button>*/}
        {/*</div>*/}
        {/*For final task 05-filter-data*/}
        {/*<NewComponent money={currentMoney} onClickFilter={onClickFilter}/>*/}

        {/*------------------------------------------------*/}

        {/*06-input*/}
        <div className="App">
            <div>
                <input />
                <button>+</button>
            </div>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    </div>
  );
}

export default App;
