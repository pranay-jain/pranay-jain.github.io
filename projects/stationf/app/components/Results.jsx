import React from 'react';
import '../styles/results.scss';

export default class Results extends React.Component {
	render() {
		let i = 0;
		return (
			<div className="results">
				<div className="results-title">Available Rooms</div>
				<div className="results-rooms" onClick={() => this.props.setCurrentRoom("room1")}>
					<div className="results-rooms-room">
						<img className="img" src={require(`../assets/room${i === 0 ? '1' : '2'}.jpg`)} />
						<div className="results-rooms-room-content">
							<div className="results-rooms-room-content-title">Room 1</div>
						</div>
					</div>
					<div className="results-rooms-room">
						<img className="img" src={require(`../assets/room2.jpg`)} />
						<div className="results-rooms-room-content">
							<div className="results-rooms-room-content-title">Room 2</div>
							<div className="results-rooms-room-content-details">
								<div className="text">Capacity</div>
								<div className="text">12</div>
								<div className="text equip">Equipment</div>
								<div className="results-rooms-room-content-details-equip">
									<div className="results-rooms-room-content-details-equip-item"><img src={require('../assets/projector.png')} /></div>
									<div className="results-rooms-room-content-details-equip-item"><img src={require('../assets/tv.png')} /></div>
								</div>
							</div>
						</div>
					</div>
					<div className="results-rooms-room">

					</div>
				</div>
			</div>
		);
	}
}