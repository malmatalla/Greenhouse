import React from 'react'; 

import Aux from '../../../../hoc/ReactAux/ReactAux';

import globalClasses from '../../../../assets/GlobalStyles/GlobalStyles.module.css'; 
import * as classes from './SensorInformationRow.module.css'; 

const sensorInformationRow = (props) => {
	return (
		<Aux>
			<div className={ classes.SensorInformationOuterContainer }>
				<div className={ classes.SensorInformationRowContainer } key={ 'rowContainer-' + props.sensorId }>
					<div className={ classes.SensorInformationLabels }>
						<p>ID:</p>
						<p>Nyckel:</p>
						<p>Typ:</p>
						<p>Alarm, lågt värde:</p>
						<p>Alarm, högt värde:</p>
						<p>Alarm, handling:</p>
					</div>
					<div className={ classes.SensorInformationValues }>
						<p> {props.sensorId}</p>
						<p> {props.sensorKey}</p>
						<p> {props.sensorTypeKey}</p>
						<p> {props.alarmLowValue}</p>
						<p> {props.alarmHighValue}</p>
						<p> {props.alarmActionKey ? props.alarmActionKey : 'Inget valt'}</p>
					</div>
				</div>
				<div className={ [globalClasses.Material, globalClasses.Button, classes.SensorButton].join(' ') } onClick={ props.clicked }>
					<p>Visa värden för senaste 12 timmarna</p>
				</div>
			</div>
		</Aux>
	)
}

export default sensorInformationRow; 