import React from 'react'; 

import * as classes from './SummaryAndTrend.module.css'; 
import SummaryNumber from './SummaryNumber/SummaryNumber'

const summaryAndTrend = (props) => {
	return(
		<div className={ classes.SummaryAndTrendWrapper }>
			<h3 className={classes.HeaderText}>{props.headerText}</h3>
			<SummaryNumber number={props.number} trend={props.trend} />
	    </div>
	)
}

export default summaryAndTrend; 