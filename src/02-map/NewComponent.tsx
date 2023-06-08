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
			NewComponent
		</div>
	);
};