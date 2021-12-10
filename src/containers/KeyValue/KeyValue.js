import React from 'react'; 

import classes from './KeyValue.module.css';

const keyValue = (props) => {	
	return (
		<div className={ [classes.KeyValueContainer].join(' ') } onClick={ props.clicked } >
			<h4>{ props.name }</h4>			
			<p>({ props.deviceKey })</p>
			<p>Högst uppmätta värde: { props.overview.max.amount } ({ props.overview.max.occurences })</p>
			<p>Lägst uppmätta värde: { props.overview.min.amount } ({ props.overview.min.occurences })</p>
			<p>Medelvärde: { props.overview.average } </p>
		</div>
	); 
}

export default keyValue; 