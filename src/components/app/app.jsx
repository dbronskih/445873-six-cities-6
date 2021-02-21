import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainScreen from "../main-screen/main-screen";
import NotFoundScreen from "../not-found-screen/not-found-screen";
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import PropertyScreen from "../property-screen/property-screen";
import {propTypesComment, propTypesOffer} from "../../prop-types";

const App = (props) => {
  const {offers, comments} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen
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
        <Route exact path="/offer/:id">
          <PropertyScreen
            offers={offers}
            comments={comments}
          />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(propTypesOffer)
  ).isRequired,
  comments: PropTypes.arrayOf(
      PropTypes.shape(propTypesComment)
  ).isRequired,
};

export default App;
