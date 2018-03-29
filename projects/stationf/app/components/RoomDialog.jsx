import React from 'react';
import anime from 'animejs'

import '../styles/room-dialog.scss';

export default class RoomDialog extends React.Component {
	componentWillMount() {
		this.state = {
			showConfirmation: false
		};

		this.basicTimeline = anime.timeline({
		  autoplay: false
		});

		let self = this;

		this.basicTimeline.complete = function () {
		  	self.setState({
		  		...self.state,
		  		showConfirmation: true
		  	});
	  	}

		this.animate = this.animate.bind(this);
	}
	
	render() {
		let { room } = this.props;
		return (
			<div id="room" className={`room-dialog ${this.props.isOpen ? 'open' : ''}`}>
				<div className="room-dialog-head">
					<span>Reserve Room</span>
					<div onClick={() => {
						this.props.clearCurrentRoom();

						if (this.state.showConfirmation) {
							window.location.reload(true);	
						}
						
					}}><i className="fas fa-times icon"></i></div>
				</div>
				{
					!this.state.showConfirmation ? 
						<div className="room-dialog-body">
							<div className="room-dialog-body-title">{room ? room.name : ''}</div>
							<div className="room-dialog-body-details">
								<div className="room-dialog-body-details-detail">
									<div className="room-dialog-body-details-detail-field">Capacity</div>
									<div className="room-dialog-body-details-detail-value">{room ? room.capacity : ''}</div>
								</div>
								<div className="room-dialog-body-details-detail">
									<div className="room-dialog-body-details-detail-field">Equipment</div>
									<div className="room-dialog-body-details-detail-value">{room ? room.equipements.map(eq => eq.name).join(", ") : ''}</div>
								</div>
								<div className="room-dialog-body-details-detail">
									<div className="room-dialog-body-details-detail-field">Date</div>
									<div className="room-dialog-body-details-detail-value"><input value={this.props.date} defaultValue={"2018-03-31"} type="date" onChange={this.props.onDateChange}/></div>
								</div>
								<div className="room-dialog-body-details-detail">
									<div className="room-dialog-body-details-detail-field">From</div>
									<div className="room-dialog-body-details-detail-value"><input value={this.props.timeFrom} defaultValue={"16:00"} type="time" step="1800" onChange={this.props.onTimeChangeFrom}/></div>
								</div>
								<div className="room-dialog-body-details-detail">
									<div className="room-dialog-body-details-detail-field">Till</div>
									<div className="room-dialog-body-details-detail-value"><input value={this.props.timeTo} defaultValue={"20:00"} type="time" step="1800"  onChange={this.props.onTimeChangeTo}/></div>
								</div>
							</div>
						</div>
						:
						<div className="room-dialog-body">
							<div className="room-dialog-body-title">Reservation Confirmed</div>
							<div className="room-dialog-body-content">Your reservation for room {room ? room.name : ''} has been confirmed.</div>
							<img src={require('../assets/success.gif')} />
						</div>
				}

				<div className="room-dialog-footer">
					<div className="button" onClick={() => this.basicTimeline.play()}>
					    <div className="text" onClick={() => this.basicTimeline.play()}>RESERVE NOW</div>
					  </div>
					  <div className="progress-bar"></div>
					  <svg x={"0px"} y={"0px"}
						 viewBox={"0 0 25 30"} style={{"enable-background" : "new 0 0 25 30"}}>
					    <path className="check st0"
					    		d={"M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2"}
					    		ref={this.animate} />
					  </svg>
				</div>
			</div>
		);
	}

	animate(ref) {
		var pathEl = ref;

		var offset = anime.setDashoffset(pathEl);
	  	pathEl.setAttribute("stroke-dashoffset", offset);

		this.basicTimeline
		  .add({
		    targets: ".text",
		    duration: 1,
		    opacity: "0"
		  })
		  .add({
		    targets: ".button",
		    duration: 1300,
		    height: 20,
		    width: 300,
		    backgroundColor: "#E5F2F2",
		    border: "0",
		    borderRadius: 100
		  })
		  .add({
		    targets: ".progress-bar",
		    duration: 2000,
		    width: 300,
		    easing: "linear"
		  })
		  .add({
		    targets: ".button",
		    width: 0,
		    duration: 1
		  })
		  .add({
		    targets: ".progress-bar",
		    width: 80,
		    height: 80,
		    delay: 500,
		    duration: 750,
		    borderRadius: 80,
		    backgroundColor: "#00E666"
		  })
		  .add({
		    targets: pathEl,
		    strokeDashoffset: [offset, 0],
		    duration: 200,
		    easing: "easeInOutSine"
		  });
	}
}