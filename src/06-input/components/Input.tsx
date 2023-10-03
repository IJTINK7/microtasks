import React, {ChangeEvent} from 'react';

type PropsType={
	title: string
	setTitle:(title: string)=> void
}
export const Input = (props:PropsType) => {
	const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) =>{
		props.setTitle(e.currentTarget.value)
	}
	return (
		<div>
			<input value={props.title} onChange={onChangeInputHandler}/>
		</div>
	);
};