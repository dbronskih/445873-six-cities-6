import React from 'react';
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";
import {propTypesOffer} from "../../prop-types";
import {CardTypes} from "../../helpers/constants";

const OffersList = (props) => {
  const {offers, onChangeActiveOffer} = props;

  return (
    <>
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) =>
          <PlaceCard
            key={`offer-${offer.id}`}
            offer={offer}
            cardType={CardTypes.MAIN_OFFERS}
            onActive={() => onChangeActiveOffer(offer.id)}
          />,
        )}
      </div>
    </>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(propTypesOffer),
  ).isRequired,
  onChangeActiveOffer: PropTypes.func,
};

export default OffersList;
