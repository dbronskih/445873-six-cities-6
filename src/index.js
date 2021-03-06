import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './store/reducers/reducer';

import {createStore, applyMiddleware} from 'redux';
import {createApi} from './services/api';
import thunk from 'redux-thunk';
import {checkAuth} from './store/api-actions';
import {AuthorizationStatus} from './helpers/constants';
import {ActionCreator} from './store/actions';

const api = createApi(() => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
});

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
));

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`),
);
