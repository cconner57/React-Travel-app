import React from 'react';
import './Footer.scss'

const Safety = ({onClose}) => {
	return (
		<div className='Safety-Container'>
			<p className='Close' onClick={onClose}>
				&#x2715;
			</p>
			<h5>COVID-19 Traveler Information</h5>
			<p>
				The Department of State advises all U.S. citizens to read the
				country-specific Travel Advisories and U.S. Embassy COVID pages for
				updates on the impact of COVID-19 worldwide.
			</p>

			<p>
				The COVID-19 pandemic continues to affect countries differently.
				Challenges to any international travel at this time may include
				mandatory quarantines, travel restrictions, and closed borders. Foreign
				governments may implement restrictions with little notice, even in
				destinations that were previously low risk. If you choose to travel
				internationally, your trip may be severely disrupted, and it may be
				difficult to arrange travel back to the United States.
			</p>

			<p>
				On March 14, the Department of State authorized the departure of U.S.
				personnel and family members from any diplomatic or consular post in the
				world who have determined they are at higher risk of a poor outcome if
				exposed to COVID-19. These departures may limit the ability of U.S.
				embassies and consulates to provide services to U.S. citizens.
			</p>

			<p>
				For the latest information regarding COVID-19, please visit the Centers
				for Disease Control and Prevention’s (CDC) website.
			</p>

			<p>
				Travelers are urged to enroll in the Smart Traveler Enrollment Program
				(STEP) to receive Alerts and make it easier to locate you in an
				emergency. The Department uses these Alerts to convey information about
				terrorist threats, security incidents, planned demonstrations, natural
				disasters, etc.{' '}
			</p>

			<p>
				For emergency assistance, please contact the nearest U.S. Embassy or
				Consulate or call the following numbers: 1 (888) 407-4747 (toll-free in
				the United States and Canada) or 1 (202) 501-4444 from other countries
				or jurisdictions.
			</p>
			<a href='https://travel.state.gov/content/travel/en/traveladvisories/ea/covid-19-information.html'>
				Travel.State.Gov
			</a>
		</div>
	);
};

export default Safety;
