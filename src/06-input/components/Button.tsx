import React from 'react';

type PropsType={
	name: string
	callBack:()=> void
}

export const Button = (props: PropsType) => {
	const onClickButtonHandler = () => {
		props.callBack()
	}
	return (
		<div>
			<button onClick={onClickButtonHandler}>{props.name}</button>
		</div>
	);
};