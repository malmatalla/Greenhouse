import React from 'react'; 

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const barChart = (props) => {
	
	return  <BarChart width={ 1200 } height={ 300 } data={ props.data }>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey={ props.xAxisDataKey } />
				<YAxis />
				<Tooltip />
				<Bar dataKey={ props.dataKey } fill="#8884d8" />
			</BarChart>
}

export default barChart;