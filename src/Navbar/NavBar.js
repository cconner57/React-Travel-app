import React, { useState, useEffect } from 'react';
import Modal from '../Modal';
import Login from '../Login-Signup/Login';
import { Link } from 'react-router-dom';
import './Navbar.scss'

const NavBar = () => {
	const [show, handleNav] = useState(false);
	const [showLogin, setShowLogin] = useState(false);

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
		<nav className={show && 'Nav__Active'}>
			<Link className='Nav__Company' to='/'>
				Buddy Planner
			</Link>
			<div className='Nav__Links'>
				<Link to='/bucket-list'>Bucket List</Link>
				<Link to='/events'>Events</Link>
				<Link to='/store'>Store</Link>
				<Link to='/discussion'>Discussion</Link>
			</div>
			<p className='Nav__Login' onClick={() => setShowLogin(true)}>
				Login
			</p>
			{showLogin && (
				<Modal onClose={() => setShowLogin(false)}>
					<Login onClose={() => setShowLogin(false)} />
				</Modal>
			)}
		</nav>
	);
};

export default NavBar;
