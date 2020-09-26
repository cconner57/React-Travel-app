import React from 'react';
import EventsList from './Events.json';

const months = []
for (const month in EventsList[0]) {
	months.push(month)
}

const Events = () => {
	return (
		<div className='Events__Container'>
			{
			EventsList.map((month, key) => (
				<div className='Events__ItemList' key={key}>
					<h1 className='Events__Month'>{month.Month}</h1>
					<div className='Events__Item'>
						<p className='Events__Date'>{month.Date}</p>
						<p className='Events__Name'>{month.Name}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Events;
