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
			currentRoom: null,
			rooms: []
		};
	}

	componentWillMount() {
		this.setCurrentRoom = this.setCurrentRoom.bind(this);

		this.setState({
			...this.state,
			rooms: [
				      {
				         "name":"Salle #1",
				         "description":"Salle #1",
				         "capacity":5,
				         "equipements":[
				            {
				               "name":"TV"
				            },
				            {
				               "name":"Retro Projecteur"
				            }
				         ],
				         "createdAt":"2016-12-07T12:39:29.812Z",
				         "updatedAt":"2016-12-08T17:31:39.489Z"
				      },
				      {
				         "name":"Salle #2",
				         "description":"Salle #2",
				         "capacity":10,
				         "equipements":[
				            {
				               "name":"Retro Projecteur"
				            }
				         ],
				         "createdAt":"2016-12-07T12:39:55.384Z",
				         "updatedAt":"2016-12-07T13:33:37.184Z"
				      },
				      {
				         "name":"Salle Okjsdkso",
				         "description":"Salle Okjsdkso",
				         "capacity":11,
				         "equipements":[],
				         "createdAt":"2016-12-07T14:15:55.733Z",
				         "updatedAt":"2016-12-09T16:45:19.025Z"
				      },
				      {
				         "name":"Salle de ouf",
				         "description":"Salle de ouf",
				         "capacity":10,
				         "equipements":[
				            {
				               "name":"TV"
				            },
				            {
				               "name":"Retro Projecteur"
				            }
				         ],
				         "createdAt":"2016-12-09T16:45:34.419Z",
				         "updatedAt":"2016-12-09T16:45:34.419Z"
				      },
				      {
				         "name":"Salle nulle",
				         "description":"Salle nulle",
				         "capacity":26,
				         "equipements":[
				            {
				               "name":"TV"
				            },
				            {
				               "name":"Retro Projecteur"
				            }
				         ],
				         "createdAt":"2016-12-09T16:45:49.096Z",
				         "updatedAt":"2016-12-09T16:45:49.096Z"
				      }
			   ]
		});

		fetch('https://online.stationf.co/tests/rooms.json', {
			method: 'GET'
		})
		//   .then((response) => {
		//   	console.log("Hellow rodl");
		//       if (response.status !== 200) {
		//         console.log(response);
		//         return;
		//       }

		//       // Examine the text in the response
		//       response.json().then(function(data) {
		//       	console.log(data);
		//       });
		//     }
		//   )
		//   .catch((err) => {
		//     console.log('Fetch Error :-S', err);
		//   });
	}

	render() {
		return (
			<div>
				<LeftBar />
				<Results rooms={this.state.rooms} setCurrentRoom={this.setCurrentRoom} />
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