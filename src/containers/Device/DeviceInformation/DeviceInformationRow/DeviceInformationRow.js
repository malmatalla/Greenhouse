import React from 'react'; 

import Aux from '../../../../hoc/ReactAux/ReactAux';

import * as classes from './DeviceInformationRow.module.css';

const deviceInformationRow = (props) => {
	return (
		<div className={ classes.DeviceInformationRowContainer }>
			{/*{ props.value ? <p>{ props.name } : { props.value }</p> : null }*/}
			{ props.value ? (
				<Aux>
					<div className={ classes.DeviceInformationLabels }>
						<p>{props.name}:</p>
					</div>
					<div className={ classes.DeviceInformationValues }>
						<p>{props.value}</p>
					</div>
				</Aux>
			) : null }
		</div>
	)
}

export default deviceInformationRow; 