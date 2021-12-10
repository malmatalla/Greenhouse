import React from 'react'; 

import classes from './Spinner.module.css'; 

const spinner = () => (
	/*<div className={classes.Loader}>Loading...</div>*/
	<div className={ classes.lds_roller }><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
); 

export default spinner; 