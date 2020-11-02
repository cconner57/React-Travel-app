import React from 'react';
import EventsList from './Events.json';
import './Events.scss';

const Events = () => {
	return (
		<div className='Events'>
			{Object.keys(EventsList).map((month, key) => {
				return (
					<div className='Events__ItemList' key={key}>
						<h1 className='Events__Month'>{month}</h1>
						{EventsList[month].map((event, key) => {
							return (
								<div
									className='Events__Item'
									key={key}
									style={{
										background: `url('/Images/Events/${event.Picture}.webp') no-repeat, url('/Images/Events/${event.Picture}.jpg') no-repeat`,
										backgroundSize: 'cover',
									}}>
									<div className='Events__ItemOverlay'>
										<p className='Events__Date'>{event.Date}</p>
										<p className='Events__Name'>{event.Name}</p>
										<p className='Events__Location'>{event.Location}</p>
									</div>
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
};

export default React.memo(Events);
