import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Navbar.scss';

const NavBar = () => {
	const [show, handleNav] = useState(false);

	let location = useLocation();

	const windowTransition = () => {
		if (window.scrollY > 50) {
			handleNav(true);
		} else handleNav(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', windowTransition);
		return () => {
			window.removeEventListener('scroll', windowTransition);
		};
	}, []);

	return (
		<nav className={show ? 'Nav__Active' : ''}>
			<Link className='Nav__Company' to='/home'>
				Buddy Planner
			</Link>
			<div className='Nav__Links'>
				<Link to='/bucket-list'>Bucket List</Link>
				<Link to='/events'>Events</Link>
				<Link to='/store'>Store</Link>
				<Link to='/discussion'>Discussion</Link>
			</div>
			<Link
				className='Nav__Login'
				to={{
					pathname: `${location.pathname}/login`,
					state: { background: location },
				}}>
				Login
			</Link>
			<Link
				className='Nav__Signup'
				to={{
					pathname: `${location.pathname}/signup`,
					state: { background: location },
				}}>
				Sign Up
			</Link>
		</nav>
	);
};

export default NavBar;
