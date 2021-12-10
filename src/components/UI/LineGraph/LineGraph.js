import React from 'react'; 

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import * as classes from './LineGraph.module.css'; 
import globalClasses from '../../../assets/GlobalStyles/GlobalStyles.module.css';

const lineGraph = (props) => {
	const width = props.width; 
	//let lines = []; 
	/*if(props.lines){
		for(let i = 0; i < props.lines.length; i++){
			lines.push(<Line type="linear" dot={ false } activeDot={ false } dataKey="Värde" stroke="blue"/>);
		}
	}*/
	return(
		props.show ? <div className={ [globalClasses.Material, classes.LineGraphContainer].join(' ') }>
			<div className={ classes.ExtraDataContainer }>
				{ props.children }
			</div>
			<LineChart
		        width={ width }
		        height={ 300 }
		        data={ props.data }
		        margin={{
		          top: 35, right: width/12, left: 0, bottom: 15
		        }}
		    >
		        <CartesianGrid strokeDasharray="6 6" />
		        <YAxis />
		        <Tooltip />
		        <Line type="linear" dot={ false } activeDot={ false } dataKey={ props.dataKey } stroke="blue"/>
		        <Line type="linear" dot={ false } activeDot={ false } dataKey={ props.max } stroke="red"/>
		        <Line type="linear" dot={ false } activeDot={ false } dataKey={ props.min } stroke="red"/>
		        <XAxis dataKey={ props.xAxisDataKey } />
		    </LineChart>
	    </div>
		: null
	)
}

export default lineGraph; 