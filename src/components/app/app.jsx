import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom';
import MainScreen from "../main-screen/main-screen";
import NotFoundScreen from "../not-found-screen/not-found-screen";
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import PropertyScreen from "../property-screen/property-screen";
import {AppRoutes} from '../../helpers/constants';
import PropTypes from "prop-types";

const App = (props) => {
  const {isAuthorized} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoutes.MAIN}>
          <MainScreen />
        </Route>
        <Route path={AppRoutes.LOGIN} exact render={() => (
          !isAuthorized ? <LoginScreen/> : <Redirect to={AppRoutes.MAIN}/>
        )}/>
        <Route exact path={AppRoutes.OFFER}>
          <PropertyScreen />
        </Route>
        <Route path={AppRoutes.FAVORITES}
          exact render={() => (
            isAuthorized ? <FavoritesScreen/> : <Redirect to={AppRoutes.LOGIN}/>
          )}/>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  isAuthorized: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthorized: state.isAuthorized,
});

export {App};
export default connect(mapStateToProps, null)(App);
