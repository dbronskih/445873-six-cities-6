import React from 'react';
import PropTypes from "prop-types";
import {propTypesOffer} from "../../prop-types";
import offersGroupByCity from "../../helpers/offers-group-by-city";
import PlaceCard from "../place-card/place-card";
import {CardTypes} from "../../helpers/constants";

const FavoritesList = ({offers}) => {
  offers = offersGroupByCity(offers.filter(({isFavorite}) => isFavorite));

  return Object.keys(offers).map((order) => {
    const data = offers[order];
    return <li key={`order-${order}`} className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{order}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {data.map((offer) => <PlaceCard
          key={`offer-${offer.id}`}
          onActive={()=>{}}
          cardType={CardTypes.FAVORITES_OFFERS}
          offer={offer}
        />
        )}
      </div>
    </li>;
  });
};

FavoritesList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(propTypesOffer)
  ).isRequired,
};

export default FavoritesList;
