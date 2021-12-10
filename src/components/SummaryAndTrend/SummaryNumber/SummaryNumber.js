import React from 'react'; 

import * as classes from './SummaryNumber.module.css'; 
import trendDownIcon from '../../../assets/icons/trend-down.png'; 
import trendUpIcon from '../../../assets/icons/trend-up.png'; 
import trendSameIcon from '../../../assets/icons/trend-same.png'; 

const summaryNumber = (props) => {
	console.log("Trend is: ", props.trend);
	let imgTag = (<img className={classes.SummaryIcon} src={trendSameIcon} alt='Trend unchanged' />);
	if(props.trend == 'up') {
		imgTag = (<img className={classes.SummaryIcon} src={trendUpIcon} alt='Trending up' />);
	}
	else if(props.trend == 'down') {
		imgTag = (<img className={classes.SummaryIcon} src={trendDownIcon} alt='Trending down' />);
	}

	return(
		<div className={classes.SummaryNumber}>
			<span className={classes.NumberWrapper}>{props.number} </span>
			{imgTag}
	    </div>
	)
}

export default summaryNumber; 