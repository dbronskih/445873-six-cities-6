import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainScreen from "../main-screen/main-screen";
import NotFoundScreen from "../not-found-screen/not-found-screen";
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import PropertyScreen from "../property-screen/property-screen";
import {propTypesOffer} from "../../prop-types";

const App = (props) => {
  const {offersCount, offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen
            offersCount={offersCount}
            offers={offers}
          />
        </Route>
        <Route exact path="/login">
          <LoginScreen/>
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen
            offers={offers}
          />
        </Route>
        <Route exact path="/offer/:id" component={PropertyScreen} />
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape(propTypesOffer)
  ).isRequired,
};

export default App;
