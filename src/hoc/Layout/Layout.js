import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 

import Aux from '../ReactAux/ReactAux'; 

import Toolbar from '../../components/Navigation/Toolbar/Toolbar'; 
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/UI/Footer/Footer'; 

import classes from './Layout.module.css'; 

class Layout extends Component {

	constructor(props){
		super(props);
		this.state = {
			showSideDrawer: false
		}
	}

	sideDrawerClosedHandler = () => {
		this.setState({showSideDrawer: false});
	}

	sideDrawerOpenedHandler = () => {
		this.setState({showSideDrawer: true}); 
	}

	render(){
	return (
		<Aux>
			<Toolbar 
				credentials={ this.props.credentials }
				show = { false } 
				clicked={this.sideDrawerOpenedHandler}
				onHeaderClicked={ this.props.onHeaderClicked } /> 
			<SideDrawer 
				credentials={this.props.credentials}
				open={this.state.showSideDrawer} 
				clicked={this.sideDrawerClosedHandler} />
			<main className={ classes.Main } id="mainContainer">
				{this.props.children}
			</main>
			<Footer/>
		</Aux>
	); 
	}
}

const mapStateToProps = (state) => {
	return {
		credentials: state.authReducer.credentials
	}
}

export default connect(mapStateToProps)(Layout); 