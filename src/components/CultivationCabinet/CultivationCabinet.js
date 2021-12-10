import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { withRouter } from 'react-router'; 

import Aux from '../../hoc/ReactAux/ReactAux'; 
import { objectIsEmpty } from '../../shared/utility'; 

import Modal from '../UI/Modal/Modal'; 
import Spinner from '../UI/Spinner/Spinner'; 
import BarChart from '../UI/BarChart/BarChart'; 
import LineGraph from '../UI/LineGraph/LineGraph'; 
import KeyValue from '../../containers/KeyValue/KeyValue'; 
import Trend from '../../containers/Trend/Trend'; 
import DeviceList from '../../containers/Device/DeviceList/DeviceList'; 
import DeviceInformationList from '../../containers/Device/DeviceInformation/DeviceInformationList/DeviceInformationList';
import SensorInformationList from '../../containers/Sensor/SensorInformation/SensorInformationList/SensorInformationList';

import * as actions from '../../store/actions/index'; 

import classes from './CultivationCabinet.module.css'; 

class CultivationCabinet extends Component{

	state = {
		activeDevice:{
			sensorKey: null,
			siteKey: null,
			deviceKey: null,
			name: null,
			description: null,
			deviceTypeKey: null,
			status: null
		},
		activeSensor:{},
		showModal: false,
		showNotification: false,
		notificationType: null
	}

	constructor(props) {
		super(props);
		// Temporary
		const apiKey = 'abc123'; 
		const siteGroupKey = this.props.match.params.siteGroupKey; 

		this.props.getDevices(siteGroupKey, apiKey);
	}

	getTimeStamp() {    
	    const dateObj = new Date();
	    const month = dateObj.getMonth() + 1; //getMonth returns 0 for January, 1 for February etc. therefore add 1
	    const day = dateObj.getDate();
	    const date = dateObj.getFullYear() + "-" + (month < 10 ? '0' : '') + month + "-" + (day < 10 ? 0 : '') + day;

	    const hours = dateObj.getHours();
	    const minutes = dateObj.getMinutes();
	    const seconds = dateObj.getSeconds();
	    const milliseconds = dateObj.getMilliseconds();
	    const time = (hours < 10 ? '0' : '') + hours + ":" + (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds + "." + (milliseconds < 10 ? '00' : milliseconds < 100 ? '0' : '') + milliseconds;
	    console.log(time);
	    return date; // not interested in time at the moment //+ "T" + time + "Z";
	}

	handleDeviceClicked = (event) => {

		// TEMPORARY
		const apiKey = 'abc123'; 

		let element = event.target;
		// Needed becuse click on childElement(textfield) gived null for values.. 
		if(element.getAttribute('siteKey') === null || element.getAttribute('siteKey') === ''){
			element = element.parentElement; 
		}
		const siteKey = element.getAttribute('siteKey');
		const deviceKey = element.getAttribute('deviceKey');
		const name = element.getAttribute('name');
		const description = element.getAttribute('description');
		const deviceTypeKey = element.getAttribute('deviceTypeKey');
		const status = element.getAttribute('status');

		this.setState({activeDevice: {
			siteKey: siteKey, 
			deviceKey: deviceKey, 
			name: name,
			description: description,
			deviceTypeKey: deviceTypeKey,
			status: status,
			showModal: true
		}});

		this.props.getSensorList(siteKey, deviceKey, apiKey);
	}

	handleSensorButtonClicked = (sensor) => {
		this.setState({activeSensor: sensor}); 
		this.props.getPeriodSensorValues(this.props.match.params.siteGroupKey, this.state.activeDevice.deviceKey, sensor.sensorKey, '12', 'abc123');
	}

	closeModal = () => {
		this.setState({showModal: false}); 
	}

	logStateAndProps =() => {
		console.log('Current state', this.state);
		console.log('Current props: ', this.props);
	}

	getKeyvalueInfo = () => {
		const dataset = []; 
		for(let i = 0; i < this.props.values.length; i++){
			dataset.push(parseInt(this.props.values[i].sensorValue1));
		}
		const max = Math.max(...dataset);
		const min = Math.min(...dataset);

		let maxOccurences = 0;
		let minOccurences = 0;

		for(var j = 0; j < dataset.length; j++){
			if(dataset[j] === max){
				maxOccurences++; 
			}else if(dataset[j] === min){
				minOccurences++; 
			}
		}

		const avg = (dataset.reduce((a, b) => a + b, 0) / dataset.length) || 0;

		const secondToLastIndex = dataset[dataset.length - 2]; 
		const lastIndex = dataset[dataset.length - 1]; 

		let trend; 
		if(lastIndex === secondToLastIndex){
			trend = 'same'; 
		}else if (lastIndex > secondToLastIndex){
			trend = 'up'; 
		}else{
			trend = 'down';
		}

		const finishedMinMaxAvgObject = {
			max: {
				amount: max, 
				occurences: maxOccurences
			}, 
			min: {
				amount: min, 
				occurences: minOccurences
			},
			average: avg.toFixed(2),
			trend: trend
		}
		return finishedMinMaxAvgObject; 
	}

	onClickGetSensorMedianValues = (sensor) => {
		this.props.getSensorMedianValues(this.props.match.params.siteGroupKey, this.state.activeDevice.deviceKey, this.state.activeSensor.sensorKey, '1', 'abc123');
		this.setState({showModal: true}); 
	}

	onClickGetSensorTrends = () => {
		console.log('getSensorMedianValues');
	}

	createPropsForBarGraph = (values) => {
		// console.log(values);
	}

	render(){

		let data = [];
		let sensorMedianData = []; 
		let width = document.documentElement.clientWidth; 
		
		const overview = this.getKeyvalueInfo(this.props.values);
		this.createPropsForBarGraph(this.props.values);

		if(this.props.values.length > 0){
			for(let i = 0; i < this.props.values.length; i++){
				data.push({					
					'Mottagen': this.props.values[i].receivedStr,
					'Värde': this.props.values[i].sensorValue1
				});
			}
		}

		if(this.props.sensorMedianValues.length > 0){
			for(let i = 0; i < this.props.sensorMedianValues.length; i++){
				sensorMedianData.push({					
					'Mottagen': this.props.sensorMedianValues[i].receivedStr,
					'Värde': this.props.sensorMedianValues[i].sensorValue1
				});
			}
			console.log('console.log(sensorMedianData);', console.log(sensorMedianData));
		}

		return (
			<Aux>
				<h2 onClick={ this.logStateAndProps }>Översikt</h2>
				
				<Modal
                	show={ this.state.showModal }
                	clicked={ this.closeModal }
                	identifier={ 'modal-key-value' }
                	minWidth={ '90%' }
                	left={ '5%' }
                >
                	<BarChart 
                		width={ width }
                		data={ sensorMedianData }
                		dataKey={ "Värde" }
                		xAxisDataKey={ "Mottagen" } />
                </Modal>


				<div className={ classes.CultivationCabinetOuterContainer } id="cultivationCabinetOuterContainer">	

				{( this.props.loadingDevices || this.props.loadingSensors ) ? <Spinner /> : null}

					<div className={ classes.DeviceOuterContainer }>				
						<DeviceList devices={ this.props.devices } listItemClicked={ this.handleDeviceClicked }/>				
						<DeviceInformationList device={ this.state.activeDevice } />				
						<SensorInformationList sensors={ this.props.sensors } clicked={ this.handleSensorButtonClicked }/>			
					</div>
					
				    <LineGraph width={ width } data={ data } show={ !objectIsEmpty(this.state.activeSensor) } xAxisDataKey={ "Mottagen" } dataKey={ "Värde" }  >
				    	<KeyValue overview={ overview } name={ this.state.activeDevice.name } deviceKey={ this.state.activeDevice.deviceKey } />
				    	<Trend trend={ overview.trend } />
				    </LineGraph>
				</div>
			</Aux>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		values: state.sensorReducer.values, 
		sensorMedianValues: state.sensorReducer.sensorMedianValues, 
		devices: state.deviceReducer.devices,
		sensors: state.sensorReducer.sensorList,
		// loadingCultivationCabinetValues: state.cultivationCabinetReducer.loading,
		loadingDevices: state.deviceReducer.loading,
		loadingSensors: state.sensorReducer.loading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getSensorList: (siteKey, deviceKey, apiKey) => dispatch(actions.getSensorList(siteKey, deviceKey, apiKey)),
		getDevices: (siteGroupKey, apiKey) => dispatch(actions.getDevices(siteGroupKey, apiKey)),
		getPeriodSensorValues: (siteKey, deviceKey, sensorKey, timePeriod, apiKey) => dispatch(actions.getPeriodSensorValues(siteKey, deviceKey, sensorKey, timePeriod, apiKey)),
		getSensorMedianValues: (siteKey, deviceKey, sensorKey, timePeriod, apiKey) => dispatch(actions.getSensorMedianValues(siteKey, deviceKey, sensorKey, timePeriod, apiKey))
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CultivationCabinet));