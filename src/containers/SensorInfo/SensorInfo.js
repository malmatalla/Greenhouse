import React from 'react'; 

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import * as classes from './SensorInfo.module.css'; 

const sensorInfo = (props) => {
	console.log("HEY - ", props.data);
	return(
		<div className={ classes.BarGraphWrapper } style={{ width: props.width * 1.0 }}>
			<BarChart
		        width={ props.width * 0.95}
		        height={ 300 }
		        data={ props.data }
		        margin={{
		          top: 70, right: 0, left: 40, bottom: 10
		        }}
		    >
		        <CartesianGrid strokeDasharray="3 3" />
		        <XAxis dataKey="Tid" />
		        <YAxis dataKey="Besökare" />
		        <Tooltip />
		        <Legend />
		        <Bar dataKey="Besökare" fill="#8884d8" />
		    </BarChart>
	    </div>
	)
}

export default sensorInfo; 