import React from 'react';

type NewComponentType = {
	students: StudentsType[]
}
type StudentsType = {
	id: number
	name: string
	age: number
}
export const NewComponent = (props: NewComponentType) => {
	return (
		<div>
			<ul>
				{props.students.map(el =><li key={el.id}> Name: {el.name}, {el.age} y.o.</li>)}
			</ul>
		</div>
	);
};