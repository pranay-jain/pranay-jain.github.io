import React from 'react';
import { render } from 'react-dom';
import LeftBar from './components/LeftBar';
import Results from './components/Results';
import RoomDialog from './components/RoomDialog';

import './style.scss';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			date: null,
			timeFrom: null,
			timeTo: null,
			numberSeats: 0,
			equip: [],
			isFiltered: false,
			currentRoom: null
		};
	}

	componentWillMount() {
		this.setCurrentRoom = this.setCurrentRoom.bind(this);

		fetch('https://online.stationf.co/tests/rooms.json', {
			method: 'GET'
		})
		  .then((response) => {
		  	console.log("Hellow rodl");
		      if (response.status !== 200) {
		        console.log(response);
		        return;
		      }

		      // Examine the text in the response
		      response.json().then(function(data) {
		      	console.log(data);
		      });
		    }
		  )
		  .catch((err) => {
		    console.log('Fetch Error :-S', err);
		  });
	}

	render() {
		return (
			<div>
				<LeftBar />
				<Results setCurrentRoom={this.setCurrentRoom} />
				{ this.state.currentRoom ? 
					<RoomDialog />
					:
					null
				}
			</div>
		);
	}

	setCurrentRoom(room) {
		this.setState({
			...this.state,
			currentRoom: room
		});
	}
}

const Root = () => (
	<App />
);

render(Root(), document.getElementById('app'));