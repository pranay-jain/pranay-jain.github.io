import React from 'react';
import '../styles/left-bar.scss';

export default class LeftBar extends React.Component {
	render() {
		return (
			<div className="left-bar">
				<div className="left-bar-title">STATION F ROOM RESERVATION</div>
				<div className="left-bar-form">
					<span className="left-bar-form-head">SEARCH FOR AVAILABLE ROOM</span>
					<hr />

					<div className="left-bar-form-search">
						<div className="left-bar-form-search-field">Date</div>
						<input type="date" name="bday" />

						<div className="left-bar-form-search-field">Time Slot</div>
						<input type="time" step="1800" name="from" />
						<div className="left-bar-form-search-to">to</div>
						<input type="time" step="1800" name="from" />

						<div className="left-bar-form-search-field">Number of Seats</div>
						<input type="number" name="seats" min="1" max="100" placeholder="1" />

						<div className="left-bar-form-search-field">Equipment</div>
						<div className="left-bar-form-search-equip">
							<div className="left-bar-form-search-equip-item"><img src={require('../assets/projector.png')} /></div>
							<div className="left-bar-form-search-equip-item"><img src={require('../assets/tv.png')} /></div>
						</div>
					</div>
					<div className="left-bar-form-submit">SUBMIT</div>
					<span className="left-bar-form-see-all">See all available rooms.</span>
				</div>
			</div>
		);
	}
}