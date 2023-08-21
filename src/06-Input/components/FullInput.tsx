import React, {ChangeEvent, useState} from 'react';

type PropsType={
	addNewMessage: (title: string)=>void
}

const FullInput = (props:PropsType) => {
	let [title, setTitle] = useState("")
	const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) =>{
		setTitle(e.currentTarget.value)
	}
	const onClickButtonHandler = () =>{
		props.addNewMessage(title)
	}
	return (
		<div>
			<input value={title} onChange={onChangeInputHandler}/>
			<button onClick={onClickButtonHandler}>+</button>
		</div>
	);
};

export default FullInput;