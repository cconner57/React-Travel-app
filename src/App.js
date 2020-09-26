import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Navbar/NavBar';
import Main from './Home/Main';
import Guide from './Home/Guide';
import USMap from './Map/Map';
import Events from './Events/Events'
import Store from './Store/Store'
import Discussion from './Discussion/Discussion'
import Footer from './Footer/Footer';

import './App.scss';

function App() {
	return (
		<Router>
			<div className='App-Container'>
				<NavBar />
				<Switch>
					<Route exact path='/'>
						<Main />
						<Guide />
					</Route>
					<Route path='/bucket-list' component={USMap} />
					<Route path='/events' component={Events} />
					<Route path='/store' component={Store} />
					<Route path='/discussion' component={Discussion} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
