import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import NavBar from './Navbar/NavBar';
import Main from './Home/Main';
import USMap from './Map/Map';
import Events from './Events/Events';
import Modal from './Modal';
import Login from './Login-Signup/Login';
import Signup from './Login-Signup/Signup';
import Safety from './Footer/Safety';
import Contact from './Footer/Contact';
import Settings from './Footer/Settings';
// import Store from './Store/Store';
import Discussion from './Discussion/Discussion';
import Footer from './Footer/Footer';

import './App.scss';

function App() {
	let location = useLocation();
	let background = location.state && location.state.background;

	return (
		<div className='App'>
			<NavBar />
			<Switch location={background || location}>
				<Route exact path='/home' children={<Main />} />
				<Route path='/bucket-list' children={<USMap />} />
				<Route path='/events' children={<Events />} />
				{/* <Route path='/store' component={Store} /> */}
				<Route path='/discussion' children={<Discussion />} />
				<Route path='*'>
					<Redirect to='/home' />
				</Route>
			</Switch>
			{background && (
				<Route
					path='/:id/safety'
					children={
						<Modal>
							<Safety />
						</Modal>
					}
				/>
			)}
			{background && (
				<Route
					path='/:id/contact'
					children={
						<Modal>
							<Contact />
						</Modal>
					}
				/>
			)}
			{background && (
				<Route
					path='/:id/settings'
					children={
						<Modal>
							<Settings />
						</Modal>
					}
				/>
			)}
			{background && (
				<Route
					path='/:id/login'
					children={
						<Modal>
							<Login />
						</Modal>
					}
				/>
			)}
			{background && (
				<Route
					path='/:id/signup'
					children={
						<Modal>
							<Signup />
						</Modal>
					}
				/>
			)}
			<Footer />
		</div>
	);
}

export default App;
