import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { withRouter } from 'react-router'; 

import Aux from '../../hoc/ReactAux/ReactAux'; 

import LineGraph from '../UI/LineGraph/LineGraph'; 
import KeyValue from '../../containers/KeyValue/KeyValue';
import Trend from '../../containers/Trend/Trend';  

import * as actions from '../../store/actions/index'; 

import classes from './AllSensors.module.css'; 

class AllSensors extends Component{

	state = {
		sensorValues: null
	}

	constructor(props) {
		super(props);

		// Temporary
		const apiKey = 'abc123'; 
		const siteGroupKey = this.props.match.params.siteGroupKey; 
		let sensorValues = []; 

		// siteKey, deviceKey, sensorKey, timePeriod, apiKey
		
			
				
		this.props.getPeriodSensorValues(siteGroupKey, 'arduino-nano-33-iot', 'air-humidity', '12', 'abc123').then(() => {
			let data = []; 
			const overview = this.getKeyvalueInfo;

			for(let i = 0; i < this.props.values.length; i++){
				data.push({					
					'Mottagen': this.props.values[i].receivedStr,
					'Värde': this.props.values[i].sensorValue1,
					'Max': 110,
					'Min': 10
				});
			}
			sensorValues.push(<LineGraph width={ document.documentElement.clientWidth } data={ data } show={ true } xAxisDataKey={ "Mottagen" } dataKey={ "Värde" } max={ 'Max' } min={ 'Min' } >
								<p>Luftfuktighet</p>
							  </LineGraph>);
			this.props.getPeriodSensorValues(siteGroupKey, 'arduino-nano-33-iot', 'air-temperature-in', '12', 'abc123').then(() => {
			
				let data = []; 
				const overview = this.getKeyvalueInfo;

				for(let i = 0; i < this.props.values.length; i++){
					data.push({					
						'Mottagen': this.props.values[i].receivedStr,
						'Värde': this.props.values[i].sensorValue1,
						'Max': 30,
						'Min': 15
					});
				}
				sensorValues.push(<LineGraph width={ document.documentElement.clientWidth } data={ data } show={ true } xAxisDataKey={ "Mottagen" } dataKey={ "Värde" } max={ 'Max' } min={ 'Min' } >
									<p>Temperatur inomhus</p>	
								  </LineGraph>);

				this.props.getPeriodSensorValues(siteGroupKey, 'arduino-nano-33-iot', 'air-temperature-out', '12', 'abc123').then(() => {
					
					let data = []; 
					const overview = this.getKeyvalueInfo;

					for(let i = 0; i < this.props.values.length; i++){
						data.push({					
							'Mottagen': this.props.values[i].receivedStr,
							'Värde': this.props.values[i].sensorValue1,
							'Max': 30,
							'Min': -15
						});
					}
					sensorValues.push(<LineGraph width={ document.documentElement.clientWidth } data={ data } show={ true } xAxisDataKey={ "Mottagen" } dataKey={ "Värde" } max={ 'Max' } min={ 'Min' } >
										<p>Temperatur utomhus</p>
									  </LineGraph>);

					this.props.getPeriodSensorValues(siteGroupKey, 'arduino-nano-33-iot', 'lux', '12', 'abc123').then(() => {
						
						let data = []; 
						const overview = this.getKeyvalueInfo;

						for(let i = 0; i < this.props.values.length; i++){
							data.push({					
								'Mottagen': this.props.values[i].receivedStr,
								'Värde': this.props.values[i].sensorValue1,
								'Max': 1100,
								'Min': 0
							});
						}
						sensorValues.push(<LineGraph width={ document.documentElement.clientWidth } data={ data } show={ true } xAxisDataKey={ "Mottagen" } dataKey={ "Värde" } max={ 'Max' } min={ 'Min' } >
											<p>Lux</p>
										  </LineGraph>);

						this.props.getPeriodSensorValues(siteGroupKey, 'arduino-nano-33-iot', 'passage-counter', '12', 'abc123').then(() => {
							
							let data = []; 
							const overview = this.getKeyvalueInfo;

							for(let i = 0; i < this.props.values.length; i++){
								data.push({					
									'Mottagen': this.props.values[i].receivedStr,
									'Värde': this.props.values[i].sensorValue1,
									'Max': 30,
									'Min': 0
								});
							}
							sensorValues.push(<LineGraph width={ document.documentElement.clientWidth } data={ data } show={ true } xAxisDataKey={ "Mottagen" } dataKey={ "Värde" } max={ 'Max' } min={ 'Min' } >
												<p>Aktivitet</p>
											  </LineGraph>);

							this.setState({sensorValues: sensorValues})
						}); 
					}); 
				}); 
			}); 
		}); 
		
		
		// https://nova.cqrify.com:9943/sensor/values/gallerigrand-1/arduino-nano-33-iot/air-humidity/12/abc123
		// https://nova.cqrify.com:9943/sensor/values/gallerigrand-1/arduino-nano-33-iot/air-temperature-in/12/abc123
		// https://nova.cqrify.com:9943/sensor/values/gallerigrand-1/arduino-nano-33-iot/air-temperature-out/12/abc123
		// https://nova.cqrify.com:9943/sensor/values/gallerigrand-1/arduino-nano-33-iot/lux/12/abc123
		// https://nova.cqrify.com:9943/sensor/values/gallerigrand-1/arduino-nano-33-iot/passage-counter/12/abc123
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

	logStateAndProps = () => {
		console.log(this.state.sensorValues);
	}

	render(){
		return (
			<Aux>
				<h2 onClick={ this.logStateAndProps }>Alla sensorer</h2>
			    
				{this.state.sensorValues}

		    </Aux>
		);
	}
}

/*<LineGraph width={ width } data={ data } show={ !objectIsEmpty(this.state.activeSensor) } xAxisDataKey={ "Mottagen" } dataKey={ "Värde" }  >
	<KeyValue overview={ overview } name={ this.state.activeDevice.name } deviceKey={ this.state.activeDevice.deviceKey } />
	<Trend trend={ overview.trend } />
</LineGraph>*/

const mapStateToProps = (state) => {
	return {
		values: state.sensorReducer.values, 
		devices: state.deviceReducer.devices,
		sensors: state.sensorReducer.sensorList,
		loadingDevices: state.deviceReducer.loading,
		loadingSensors: state.sensorReducer.loading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getSensorList: (siteKey, deviceKey, apiKey) => dispatch(actions.getSensorList(siteKey, deviceKey, apiKey)),
		getDevices: (siteGroupKey, apiKey) => dispatch(actions.getDevices(siteGroupKey, apiKey)),
		getPeriodSensorValues: (siteKey, deviceKey, sensorKey, timePeriod, apiKey) => dispatch(actions.getPeriodSensorValues(siteKey, deviceKey, sensorKey, timePeriod, apiKey)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AllSensors);