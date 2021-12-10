import React from 'react'; 

import DeviceRow from '../DeviceRow/DeviceRow';

import * as classes from './DeviceList.module.css'; 

import globalClasses from '../../../assets/GlobalStyles/GlobalStyles.module.css';

const deviceList = (props) => {
	let devicesMarkup = []; 

		if(props.devices){
			if(props.devices.length > 0){
				const devices = props.devices; 
				for(var i = 0; i < devices.length; i++){
					const deviceKey = devices[i].deviceKey; 
					devicesMarkup.push(
						<DeviceRow 
							listItemClicked={ props.listItemClicked }
							sitekey={ devices[i].siteKey }
							devicekey={ devices[i].deviceKey }
							name={ devices[i].name }
							description={ devices[i].description }
							devicetypekey={ devices[i].deviceTypeKey }
							status={ devices[i].status }
							key={devices[i].siteKey + '-' + deviceKey + '-' + devices[i].deviceTypeKey } />
					);
				}
			}
		}

		return(				
			<div className={ [globalClasses.Material, classes.DeviceUnorderedListContainer].join(' ') }>
				{devicesMarkup.length > 0 ? (<ul className={ classes.DeviceUnorderedList }>
					{devicesMarkup}				
				</ul>) : <h4>Det finns inga enheter att visa</h4>}
			</div>
		)
}

export default deviceList;