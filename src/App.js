import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'; 

import { objectIsEmpty } from './shared/utility'; 
import asyncComponent from './hoc/asyncComponent/asyncComponent'; 

import Layout from './hoc/Layout/Layout'; 

import PublicHomePage from './containers/PublicHomePage/PublicHomePage'; 
import Logout from './containers/Auth/Logout/Logout'; 
import Login from './containers/Auth/Login/Login'; 

import * as actions from './store/actions/index'; 

import './App.css';

// Lazyload components with our hoc
const asyncCultivationCabinet = asyncComponent(() => {
  return import('./components/CultivationCabinet/CultivationCabinet');
});

const asyncAllSensors = asyncComponent(() => {
  return import('./components/AllSensors/AllSensors');
});

const asyncPeopleCounter = asyncComponent(() => {
  return import('./containers/PeopleCounter/PeopleCounter'); 
});

const asyncSiteGroups = asyncComponent(() => {
  return import('./containers/SiteGroups/SiteGroups');
});

const asyncSites = asyncComponent(() => {
  return import('./containers/Sites/Sites'); 
});


class App extends Component{

  constructor(props){
    super(props);
    this.props.tryAutoLogin(); 
  }

  render(){

    let routes = (
      <Switch>
        <Route path = '/login' component={ Login }/>
        <Route path = '/' component={ PublicHomePage }/>
      </Switch>
    );

    if(!objectIsEmpty(this.props.credentials)){
      routes = (
        <Switch>
          <Route path='/people-counter/:siteKey/:deviceKey/:sensorKey' exact component={ asyncPeopleCounter }/>
          
          <Route path='/sites/:siteGroupKey/' exact component={ asyncSites }/>
          <Route path='/cultivation-cabinet/:siteGroupKey' exact component={ asyncCultivationCabinet } />
          <Route path='/site-all-sensors/:siteGroupKey' exact component={ asyncAllSensors } />
          <Route path='/site-groups' exact component={ asyncSiteGroups }/>
          <Route path='/logout' exact component={ Logout } />
          <Route path='/login' exact component={ Login } />
          <Route path='/' component={ PublicHomePage }/>
        </Switch>
      )
    }

    return (
      <Layout>
        {routes}
      </Layout>
    );

  }
}

const mapStateToProps = state => {
  return {
    credentials: state.authReducer.credentials
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    tryAutoLogin: () => dispatch(actions.tryAutoLogin())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));