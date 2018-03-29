import React from 'react';
import '../styles/left-bar.scss';

export default class LeftBar extends React.Component {
	constructor() {
		super();

		this.state = {
			selected: []
		}

		this.selectEquip= this.selectEquip.bind(this);
	}

	render() {
		return (
			<div className={`left-bar ${this.props.showFilter ? 'show' : ''}`}>
				<div className="left-bar-title">
					STATION F ROOM RESERVATION
					<div className="icon" onClick={() => this.props.changeFilter(false)}><i className="fas fa-times" /></div>
				</div>
				<div className="left-bar-form">
					<span className="left-bar-form-head">SEARCH FOR AVAILABLE ROOM</span>
					<hr />

					<div className="left-bar-form-search">
						<div className="left-bar-form-search-field">Date</div>
						<input defaultValue="2018-03-31" type="date" onChange={this.props.onDateChange} />

						<div className="left-bar-form-search-field">Time Slot</div>
						<input defaultValue="16:00" type="time" step="1800" name="from" onChange={this.props.onTimeChangeFrom}/>
						<div className="left-bar-form-search-to">to</div>
						<input defaultValue="20:00" type="time" step="1800" name="to" onChange={this.props.onTimeChangeTo}/>

						<div className="left-bar-form-search-field">Number of Seats</div>
						<input type="number" min="1" max="100" placeholder="1" onChange={this.props.onSeatsChange} />

						<div className="left-bar-form-search-field">Equipment</div>
						<div className="left-bar-form-search-equip">
							<div className={`left-bar-form-search-equip-item ${this.props.selected.indexOf('TV') >= 0 ? 'selected': ''}`} onClick={() => this.props.selectEquip('TV')}><i className="fas fa-tv" /></div>
							<div className={`left-bar-form-search-equip-item ${this.props.selected.indexOf('Retro Projecteur') >= 0 ? 'selected': ''}`} onClick={() => this.props.selectEquip('Retro Projecteur')}><i className="proj"/></div>
						</div>
					</div>
					<div className="left-bar-form-submit" onClick={() => this.props.changeIsFiltered(true)}>SUBMIT</div>
					<span className="left-bar-form-see-all" onClick={() => this.props.changeIsFiltered(false)}>See all available rooms.</span>
				</div>
			</div>
		);
	}

	selectEquip(eq) {
		if(this.state.selected.indexOf(eq) >= 0) {
			this.setState({
				...this.state,
				selected: [...this.state.selected.slice(0, this.state.selected.indexOf(eq)), ...this.state.selected.slice(this.state.selected.indexOf(eq) + 1)]
			});
		} else {
			this.setState({
				...this.state,
				selected: [...this.state.selected, eq]
			});
		}
	}
}