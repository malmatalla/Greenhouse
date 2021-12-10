import React, { Component } from 'react'; 
import { Map, Polyline, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import  { connect } from 'react-redux'; 
import { withRouter } from 'react-router'; 

import Aux from '../../hoc/ReactAux/ReactAux'; 

import Spinner from '../../components/UI/Spinner/Spinner'; 

import * as actions from '../../store/actions/index'; 

import classes from './Excavator.module.css'; 

class Excavator extends Component {

	constructor(props) {
		super(props);

		this.state = {
		    showingInfoWindow: false,
		    activeMarker: {},
		    selectedPlace: null,
		    location: {
				lat: 58.760244, 
				lng: 17.019429
    		},
    		zoom: 14,
    		initialExcavatorLocation: {
    			lat: 58.760244, 
				lng: 17.019429
    		},
    		lastKnownExcavatorLocation: { 
    			lat: 58.760244, 
				lng: 17.019429
    		},
    		route: [], 
		};

		this.props.getPeriodSensorValues(this.props.match.params.siteGroupKey, this.props.match.params.deviceKey, this.props.match.params.sensorKey, '12', 'abc123').then(() => {
			let route = []; 
			for(let i = 0; i < this.props.values.length; i++){
				if(this.props.values[i].sensorValue1 && this.props.values[i].sensorValue2){
					route.push({lat: this.props.values[i].sensorValue1, lng: this.props.values[i].sensorValue2});
				}
			}
			this.setState({route: route}); 
			if(route.length > 1){
				const initialExcavatorLocation = route[0]; 
				const lastKnownExcavatorLocation = route[route.length -1]; 
				this.setState({
					initialExcavatorLocation: initialExcavatorLocation,
					lastKnownExcavatorLocation: lastKnownExcavatorLocation
				})
				this.setCenterAndZoomAtPolyline(); 
			}
		});		
	}

	onMarkerClick = (props, marker, e) => {
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true,
		});
	}

	onClose = (props) => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: {}, 
				selectedPlace: {}		
			});
		}
	}

	setCenterAtCurrentLocation = () => {
		if (navigator && navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(pos => {
				const coords = pos.coords;
				this.setState({
					location: {
						lat: coords.latitude,
						lng: coords.longitude
					}
				});
			});
		}
	}

	setCenterAndZoomAtPolyline = (props, map) => {
		const bounds = new this.props.google.maps.LatLngBounds()

		for (var i = 0; i < this.state.route.length; i++) {
			bounds.extend(new window.google.maps.LatLng(
				this.state.route[i].lat,
				this.state.route[i].lng
			));
		}
		this.refs.excavatorsMap.map.fitBounds(bounds)
	}

	logState = () => {
		//console.log(this.props, this.state); 
		const distance = window.google.maps.geometry.spherical.computeDistanceBetween(new window.google.maps.LatLng(
    			58.760244, 
				17.019429
    		),new window.google.maps.LatLng( 
    			58.754968, 
    			17.016281
    		));
		console.log(distance);

		let polylineLength = 0;
		let path = []; 
		for (let i = 0; i < this.state.route.length; i++) {
			var lat = parseFloat(this.state.route[i].lat);
  			var lng = parseFloat(this.state.route[i].lng);
			let pointPath = window.google.maps.LatLng(lat,lng);
			path.push(pointPath);
			if (i > 0){
				polylineLength += window.google.maps.geometry.spherical.computeDistanceBetween(path[i], path[i-1]);
			}

		}
		console.log("the length of the polyline is "+polylineLength+" meters");
	}

	render(){		

		return(
			<Aux>
				<h2 onClick={ this.logState }>{ this.props.match.params.siteGroupKey }</h2>
				<div className={ classes.ExcavatorContainer }>
					{ this.props.loading ? <Spinner /> : null }
					
					<Map
				        google={this.props.google}
				        zoom={this.state.zoom}
				        ref="excavatorsMap"
				        initialCenter={{
				        	lat: 58.760244, 
							lng: 17.019429
				        }}
				        center={{
				        	lat: this.state.location.lat,
				        	lng: this.state.location.lng,
				        }}				        
				    >

						<Marker 
							onClick={this.onMarkerClick} 
							name={'Initial location'} 
							position={ this.state.initialExcavatorLocation }
							icon= {
							    { url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png" }
							} />
						<InfoWindow
							marker={this.state.activeMarker}
							visible={this.state.showingInfoWindow}
							onClose={this.onClose}
						>
							<div>
								<h4>{ this.state.activeMarker.name }</h4>
							</div>
						</InfoWindow>

						<Marker 
							onClick={this.onMarkerClick} 
							name={'Last known location'} 
							position={ this.state.lastKnownExcavatorLocation }
							icon= {
							    { url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png" }
							} />
						<InfoWindow
							marker={this.state.activeMarker}
							visible={this.state.showingInfoWindow}
							onClose={this.onClose}
						>
							<div>
								<h4>{ this.state.activeMarker.name }</h4>
							</div>
						</InfoWindow>

						<Polyline
							path={this.state.route}
							strokeColor="#0000FF"
							strokeOpacity={0.8}
							strokeWeight={2} 
						/>

				    </Map>

				</div>
			</Aux>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		values: state.sensorReducer.values, 
		loading: state.siteReducer.loading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getPeriodSensorValues: (siteKey, deviceKey, sensorKey, timePeriod, apiKey) => dispatch(actions.getPeriodSensorValues(siteKey, deviceKey, sensorKey, timePeriod, apiKey)),
	}
}

export default GoogleApiWrapper({
  apiKey: 'abc123'
})(withRouter(connect(mapStateToProps, mapDispatchToProps)(Excavator)));

