import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
	let location = useLocation();

	return (
		<footer className='Footer'>
			<p>Web Design + Development by Chris Conner</p>
			<div className='Footer__Links'>
				<Link
					to={{
						pathname: `${location.pathname}/safety`,
						state: { background: location },
					}}>
					Travel Safety
				</Link>
				<Link
					to={{
						pathname: `${location.pathname}/contact`,
						state: { background: location },
					}}>
					Contact
				</Link>
				<Link
					to={{
						pathname: `${location.pathname}/settings`,
						state: { background: location },
					}}>
					Settings
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
