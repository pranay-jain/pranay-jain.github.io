import React from 'react';
import { render } from 'react-dom';
import LeftBar from './components/LeftBar';
import Results from './components/Results';

import './style.scss';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			date: null,
			timeFrom: null,
			timeTo: null,
			numberSeats: 0,
			searchVal: '',
			equip: [],
			isFiltered: false,
			isLoading: false,
			rooms: [],
			showFilter: false
		};
	}

	componentWillMount() {
		this.fetchResults = this.fetchResults.bind(this);
		this.onDateChange = this.onDateChange.bind(this);
		this.onTimeChangeFrom = this.onTimeChangeFrom.bind(this);
		this.onTimeChangeTo = this.onTimeChangeTo.bind(this);
		this.onSeatsChange = this.onSeatsChange.bind(this);
		this.changeFilter = this.changeFilter.bind(this);
		this.changeIsFiltered = this.changeIsFiltered.bind(this);
		this.selectEquip = this.selectEquip.bind(this);
		this.changeSearchVal = this.changeSearchVal.bind(this);

		this.fetchResults();
	}

	render() {
		return (
			<div>
				<LeftBar
					onDateChange = {this.onDateChange} 
					onTimeChangeFrom = {this.onTimeChangeFrom}
					onTimeChangeTo = {this.onTimeChangeTo}
					onSeatsChange={this.onSeatsChange}
					changeSearchVal={this.changeSearchVal}
					fetchResults = {this.fetchResults}  
					showFilter={this.state.showFilter}
					changeFilter={this.changeFilter} 
					changeIsFiltered={this.changeIsFiltered}
					selectEquip={this.selectEquip}
					selected={this.state.equip}
					searchVal={this.state.searchVal}
				/>
				{
					this.state.isLoading ?
					<div className="loading">Loading...</div>
					:
					<Results 
						isFiltered={this.state.isFiltered}
						changeFilter={this.changeFilter} 
						rooms={this.state.rooms} 
						setCurrentRoom={this.setCurrentRoom}
						onDateChange = {this.onDateChange} 
						onTimeChangeFrom = {this.onTimeChangeFrom}
						onTimeChangeTo = {this.onTimeChangeTo}
						date={this.state.date}
						equip={this.state.equip}
						timeFrom={this.state.timeFrom}
						timeTo={this.state.timeTo}
						numberSeats={this.state.numberSeats}
						searchVal={this.state.searchVal}
					 />
				}
			</div>
		);
	}

	fetchResults() {
		let self = this;
		var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    		targetUrl = 'https://online.stationf.co/tests/rooms.json';

		this.setState({
			...this.state,
			isLoading: true
		});

		fetch(proxyUrl + targetUrl)
		  .then((response) => {
		      if (response.status !== 200) {
		        return;
		      }

		      response.json().then(function(data) {
		      	self.setState({
		      		...self.state,
		      		rooms: data.rooms
		      	});

		      	setTimeout(() => self.setState({
		      		...self.state, 
		      		isLoading: false
		      	}), 1200);
		       });
		    }
		  )
		  .catch((err) => {
		    console.log('Fetch Error :-S', err);
		  });
	}

	onDateChange(evt) {
		this.setState({
			...this.state,
			date: evt.target.value
		});
	}

	onTimeChangeFrom(evt) {
		this.setState({
			...this.state,
			timeFrom: evt.target.value
		});
	}

	onTimeChangeTo(evt) {
		this.setState({
			...this.state,
			timeTo: evt.target.value
		});
	}

	onSeatsChange(evt) {
		this.setState({
			...this.state,
			numberSeats: evt.target.value
		});
	}

	changeFilter(val) {
		this.setState({
			...this.state,
			showFilter: val
		});
	}

	changeIsFiltered(val) {
		this.setState({
			...this.state,
			isFiltered: val
		});
	}

	changeSearchVal(evt) {
		this.setState({
			...this.state,
			searchVal: evt.target.value
		});
	}

	selectEquip(eq) {
		if(this.state.equip.indexOf(eq) >= 0) {
			this.setState({
				...this.state,
				equip: [...this.state.equip.slice(0, this.state.equip.indexOf(eq)), ...this.state.equip.slice(this.state.equip.indexOf(eq) + 1)]
			});
		} else {
			this.setState({
				...this.state,
				equip: [...this.state.equip, eq]
			});
		}
	}
 }

const Root = () => (
	<App />
);

render(Root(), document.getElementById('app'));