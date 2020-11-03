import React from 'react';
import GuideItem from './GuideItem';
import './Home.scss';

const Guide = () => {
	return (
		<div className='Guide'>
			<h5 className='Guide__Title'>Here's how this site works</h5>
			<div className='Guide__List'>
				<GuideItem
					title='Create an account'
					src='/Images/Home/login.svg'
					alt='Login'
				/>
				<GuideItem
					title="Select all the places you'd like to go"
					src='/Images/Home/earth.svg'
					alt='Earth'
				/>
				<GuideItem
					title='Add your estimated date and plans'
					src='/Images/Home/marker.svg'
					alt='Marker'
				/>
				<GuideItem
					title='And finally, make some new friends in the discussion section'
					src='/Images/Home/conversation.svg'
					alt='Discussion'
				/>
			</div>
		</div>
	);
};

export default Guide;
