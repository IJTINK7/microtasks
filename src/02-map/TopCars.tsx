import React from 'react';

type TopCarsType= {
	topCars: CarType[]
}
type CarType ={
	manufacturer: string
	model: string
}

export const TopCars = (props: TopCarsType) => {
	return (
		<div>
			<table border={1}>
				<thead>
					<tr>
						<th>№</th>
						<th>Manufacturer</th>
						<th>Model</th>
					</tr>
				</thead>
				<tbody>
					{props.topCars.map((el, index) => {
						return (
							<tr key={index}>
								<td>{index+1}</td>
								<td>{el.manufacturer}</td>
								<td>{el.model}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	);
};