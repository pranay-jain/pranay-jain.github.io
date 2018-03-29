import React from 'react';
import RoomDialog from './RoomDialog';

import '../styles/results.scss';

export default class Results extends React.Component {
	constructor() {
		super();

		this.state = {
			currentRoom: null
		}
	}

	componentWillMount() {
		this.renderRooms = this.renderRooms.bind(this);
		this.renderRoom = this.renderRoom.bind(this);
		this.setCurrentRoom = this.setCurrentRoom.bind(this);
		this.clearCurrentRoom = this.clearCurrentRoom.bind(this);
	}

	render() {
		let rooms = this.props.rooms;

		if(this.props.isFiltered) {
			if (this.props.date || this.props.timeFrom || this.props.timeTo) {
				console.log('umseats', this.props.numberSeats);
				rooms = rooms.slice(3);
			} 

			if (this.props.numberSeats) {
				console.log('umseats', this.props.numberSeats);
				rooms = rooms.filter((room) => {
					return room.capacity > this.props.numberSeats
				});
			}

			if (this.props.equip) {
				rooms = rooms.filter((room) => {
					let ret = false; 
					for (let equip of this.props.equip) {
						ret = ret || room.equipements.map(eq => eq.name).indexOf(equip) >= 0
					}

					return ret
				});
			}
		}

		return (
			<div>
				<div className="header">
					<div className="header-title">STATION F ROOM RESERVATION</div>
					<div className="icon" onClick={() => this.props.changeFilter(true)}><i className="fas fa-filter" /></div>
				</div>
				<div className={`blur ${this.state.currentRoom !== null ? 'active' : ''}`} onClick={this.clearCurrentRoom}></div>
					{
						rooms && rooms.length > 0 ?
						<div className="results">
							<div className="results-title">Available Rooms</div>
							<div className="results-rooms" >
								{this.renderRooms(rooms)}
							</div>
						</div>
						:
						<div className="loading" >
							Sorry! No rooms are available for the given criteria.
						</div>
					}
				<RoomDialog 
					room={this.state.currentRoom} 
					isOpen={this.state.currentRoom !== null} 
					clearCurrentRoom={this.clearCurrentRoom}
					date={this.props.date}
					timeFrom={this.props.timeFrom}
					timeTo={this.props.timeTo}
				/>
			</div>
		);
	}

	renderRooms(rooms) {
		let renderedRooms = [];
		let i = 1;

		if (rooms) {
			for (let room of rooms) {
				renderedRooms.push(this.renderRoom(room, i));
				i++;
			}
		}

		return renderedRooms.length > 0 ? renderedRooms : null;
	}

	renderRoom(room, index) {
		return(
			<div className="room-container">
				<div className="results-rooms-room" onClick={() => this.setCurrentRoom(room)}>
					<img className="img" src={require(`../assets/room${index}.jpg`)} />
					<div className="results-rooms-room-content">
						<div className="results-rooms-room-content-title">{room.name}</div>
						<div className="results-rooms-room-content-reserve">
							Reserve Now
						</div>
					</div>
				</div>
				<div className="results-rooms-room-info">
					<div className="results-rooms-room-info-field">Capacity</div>
					<div className="results-rooms-room-info-value" style={{"paddingRight": "8px"}}>{room.capacity}</div>
				</div>
				<div className="results-rooms-room-info">
					<div className="results-rooms-room-info-field">Equipment</div>
					<div className="results-rooms-room-info-value-equip">
						{
							this.renderEquipmentIcons(room.equipements).length > 0 ?
							this.renderEquipmentIcons(room.equipements)
							:
							'N/A'
						}
					</div>
				</div>
			</div>
		);
	}

	renderEquipmentIcons(equipments) {
		let renderedEquips = [];
		if (equipments) {
			for (let equip of equipments) {
				if (equip.name === 'TV') {
					renderedEquips.push(<div className="results-rooms-room-info-value-equip-item"><i className={`fas fa-tv`} /></div>);
				} else {
					renderedEquips.push(<div className="results-rooms-room-info-value-equip-item"><img src={require('../assets/projector_alt.png')} /></div>);
				}
			}
		}

		return renderedEquips;
	}

	setCurrentRoom(room) {
		this.setState({
			...this.state,
			currentRoom: room
		});
	}

	clearCurrentRoom() {
		this.setState({
			...this.state,
			currentRoom: null
		});
	}

}