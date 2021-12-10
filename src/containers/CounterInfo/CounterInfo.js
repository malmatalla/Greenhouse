import React from 'react'; 

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import * as classes from './CounterInfo.css'; 

const counterInfo = (props) => {
	return(
		<div className={ classes.LineGraphWrapper } style={{ width: props.width * 1.0 }}>
			<LineChart
		        width={ props.width * 0.95}
		        height={ 300 }
		        data={ props.data }
		        margin={{
		          top: 70, right: 0, left: 40, bottom: 10
		        }}
		    >
		        <CartesianGrid strokeDasharray="6 6" />
		        <YAxis />
		        <Tooltip />
		        <Legend />
		        <Line type="monotone" dataKey="Besökare" stroke="blue"/>
		        <XAxis dataKey="Tid" />
		    </LineChart>
	    </div>
	)
}

export default counterInfo; 