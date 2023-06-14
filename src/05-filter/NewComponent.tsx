import React from 'react';
import {CurrencyType} from "../App";

type PropsType = {
	money: MoneyPropsType[]
	onClickFilter:(currency: CurrencyType)=> void
}
type MoneyPropsType={
	banknote: string
	nominal: number
	number: string
}
export const NewComponent = (props:PropsType) => {
	const onClickFilterHandler=(currency: CurrencyType)=>{
		props.onClickFilter(currency)
	}
	return (
		<div>
			<ul>
				{props.money.map((el, index) => {
					return (
						<li key={index}>
							<span> {el.banknote}</span>
							<span> {el.nominal}</span>
							<span> {el.number}</span>
						</li>
					)
				})}
			</ul>
			<div style={{marginLeft:"35px"}}>
				<button onClick={()=> onClickFilterHandler("all")}>All</button>
				<button onClick={()=> onClickFilterHandler("ruble")}>Ruble</button>
				<button onClick={()=> onClickFilterHandler("dollar")}>Dollar</button>
			</div>
		</div>
	);
};