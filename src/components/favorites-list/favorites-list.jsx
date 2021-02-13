import React from 'react';
import PropTypes from "prop-types";
import FavoriteCard from "../favorite-card/favorite-card";
import {propTypesOffer} from "../../prop-types";

const FavoritesList = (props) => {
  const {offers} = props;

  const content = [];
  const sortOffers = {};
  offers.map((order) => {
    const {isFavorite, city} = order;
    if (isFavorite) {
      if (!sortOffers[city.name]) {
        sortOffers[city.name] = [];
      }
      sortOffers[city.name].push(order);
    }
  });

  Object.keys(sortOffers).map((order) => {
    const data = sortOffers[order];
    const element = <li key={`order-${order}`} className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{order}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {data.map((offer) => {
          return <FavoriteCard key={`offer-${offer.id}`} offer={offer}/>;
        })}
      </div>
    </li>;

    content.push(element);
  });

  return content;
};

FavoritesList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(propTypesOffer)
  ).isRequired,
};

export default FavoritesList;
