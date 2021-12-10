import React from 'react'; 

import Aux from '../../../../hoc/ReactAux/ReactAux'; 

import DeviceInformationRow from '../DeviceInformationRow/DeviceInformationRow'; 

import * as classes from './DeviceInformationList.module.css'; 
import globalClasses from '../../../../assets/GlobalStyles/GlobalStyles.module.css';

const deviceInformationList = (props) => {
	return (
		<div className={ [globalClasses.Material, classes.DeviceInformationListContainer].join(' ') }>
			{props.device.siteKey ? 
				<Aux>
					<DeviceInformationRow name={ 'Site key' } value={ props.device.siteKey }/>
					<DeviceInformationRow name={ 'Device key' } value={ props.device.deviceKey }/>
					<DeviceInformationRow name={ 'Name' } value={ props.device.name }/>
					<DeviceInformationRow name={ 'Description' } value={ props.device.description }/>
					<DeviceInformationRow name={ 'Device type key' } value={ props.device.deviceTypeKey }/>
					<DeviceInformationRow name={ 'Status' } value={ props.device.status }/>
				</Aux>

			: <h4>Vänligen välj enhet</h4>}

		</div>
	)
}

export default deviceInformationList; 