import React from 'react'; 

import Aux from '../../../../hoc/ReactAux/ReactAux'; 

import SensorInformationRow from '../SensorInformationRow/SensorInformationRow'; 

import * as classes from './SensorInformationList.module.css'; 
import globalClasses from '../../../../assets/GlobalStyles/GlobalStyles.module.css';

const sensorInformationList = (props) => {
	let sensors = []; 

	if(props.sensors){
		for(var i = 0; i < props.sensors.length; i++){
			const thisSensor = props.sensors[i];
			sensors.push(
				<SensorInformationRow 
					sensorId={ thisSensor.sensorId } 
					siteKey={ thisSensor.siteKey } 
					deviceKey={ thisSensor.deviceKey } 
					sensorKey={ thisSensor.sensorKey } 
					sensorTypeKey={ thisSensor.sensorTypeKey } 
					alarmLowValue={ thisSensor.alarmLowValue } 
					alarmHighValue={ thisSensor.alarmHighValue } 
					alarmActionKey={ thisSensor.alarmActionKey } 
					onsensorclicked={ props.onsensorclicked }
					key={'sensor-information-' + thisSensor.sensorId}
					clicked={() => props.clicked(thisSensor) }
				/>
			);
		}
	}

	return (
		<div className={ [globalClasses.Material, classes.SensorListContainer].join(' ') }>
			{sensors.length > 0 ? 
				<Aux>
					{sensors}
				</Aux>
			: <h4>Det finns inga sensorer att visa</h4>}
		</div>
	)
}

export default sensorInformationList; 