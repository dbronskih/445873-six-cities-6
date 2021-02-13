import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';

const Setting = {
  OFFERS_COUNT: 5,
};

ReactDOM.render(
    <App
      offersCount={Setting.OFFERS_COUNT}
      offers={offers}
    />,
    document.querySelector(`#root`),
);
