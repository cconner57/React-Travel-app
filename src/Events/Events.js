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
								<div className='Events__Item' key={key}>
									<picture>
										<img
											className='Events__Image'
											src={`/Images/Events/${event.Picture}.webp`}
											alt={`${event.Name}`}
											loading='lazy'
										/>
										<img
											className='Events__Image'
											src={`/Images/Events/${event.Picture}.jpg`}
											alt={`${event.Name}`}
											loading='lazy'
										/>
									</picture>
									<div className='Events__ItemOverlay'>
										<p className='Events__Date'>{event.Date}</p>
										<div className='Events__Details'>
											<p className='Events__Name'>{event.Name}</p>
											<p className='Events__Location'>{event.Location}</p>
										</div>
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
