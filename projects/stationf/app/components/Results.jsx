import React from 'react';
import '../styles/results.scss';

export default class Results extends React.Component {
	componentWillMount() {
		this.renderRooms = this.renderRooms.bind(this);
		this.renderRoom = this.renderRoom.bind(this);
	}

	render() {
		let i = 0;
		return (
			<div className="results">
				<div className="results-title">Available Rooms</div>
				<div className="results-rooms" >
					{this.renderRooms()}
				</div>
			</div>
		);
	}

	renderRooms() {
		let renderedRooms = [];
		let i = 1;
		for (let room of this.props.rooms) {
			renderedRooms.push(this.renderRoom(room, i));
			i++;
		}

		return renderedRooms;
	}

	renderRoom(room, index) {
		return(
			<div className="results-rooms-room" onClick={() => this.props.setCurrentRoom(room)}>
				<img className="img" src={require(`../assets/room${index}.jpg`)} />
				<div className="results-rooms-room-content">
					<div className="results-rooms-room-content-title">{room.name}</div>
					<div className="results-rooms-room-content-details">
						<div className="text">Capacity</div>
						<div className="text">{room.capacity}</div>
						<div className="text equip">Equipment</div>
						<div className="results-rooms-room-content-details-equip">
							{
								this.renderEquipmentIcons(room.equipements).length > 0 ?
								this.renderEquipmentIcons(room.equipements)
								:
								'N/A'
							}
						</div>
					</div>
				</div>
			</div>
		);
	}

	renderEquipmentIcons(equipments) {
		let renderedEquips = [];
		for (let equip of equipments) {
			renderedEquips.push(<div className="results-rooms-room-content-details-equip-item"><img src={require(`../assets/${equip.name === "TV" ? "tv" : "projector"}.png`)} /></div>);
		}

		return renderedEquips;
	}

}