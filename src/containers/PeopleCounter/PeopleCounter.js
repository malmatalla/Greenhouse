import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 

import SensorInfo from '../../containers/SensorInfo/SensorInfo'; 

import * as actions from '../../store/actions/index'; 

import classes from './PeopleCounter.module.css'; 

class PeopleCounter extends Component{

	constructor(props) {
		super(props);
		const siteKey = this.props.match.params.siteKey; 
		const deviceKey = this.props.match.params.deviceKey; 
		const sensorKey = this.props.match.params.sensorKey; 
		this.props.getPeriodSensorValues(siteKey, deviceKey, sensorKey);
		}

	render(){
		let data = [];
		let totalVisitors = 0;

		if(this.props.values.sensorReducer.values.length > 0){
			for(let i = 0; i < this.props.values.sensorReducer.values.length; i++){
				data.push({					
					'Tid': this.props.values.sensorReducer.values[i].receivedStr,
					'Besökare': this.props.values.sensorReducer.values[i].sensorValue1, 
				});
				totalVisitors = totalVisitors + this.props.values.sensorReducer.values[i].sensorValue1;
			}
		}
		let width = 1400; 
		if(document.getElementById("root")){
			width = document.getElementById("root").offsetWidth - 55; 
		}

		if(document.getElementById ("peopleCounterContainer")){
			var parentElem = document.getElementById ("peopleCounterContainer");
            //width = parentElem.childNodes[1].offsetWidth;
		}

		return (
			<div className={ classes.PeopleCounterContainer } id="peopleCounterContainer">	
				<p>Antal besökare senaste 24 timmarna: {totalVisitors}</p>
			    <SensorInfo width={ 900 } data={ data } />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		values: state
	}
}

const mapDispatchToProps = (dispatch)  => {
	return {
		getPeriodSensorValues: (siteKey, deviceKey, sensorKey) => dispatch(actions.getPeriodSensorValues(siteKey, deviceKey, sensorKey))	
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleCounter);