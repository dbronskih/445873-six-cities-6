import React, {useState} from 'react';
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";
import {propTypesOffer} from "../../prop-types";
import {CardTypes} from "../../helpers/constants";

const OffersList = (props) => {
  const {offers} = props;
  const [, setActiveOffer] = useState(null);

  return (
    <>
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) =>
          <PlaceCard
            key={`offer-${offer.id}`}
            offer={offer}
            cardType={CardTypes.MAIN_OFFERS}
            onActive={() => {
              setActiveOffer(offer.id);
            }}
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
};

export default OffersList;
