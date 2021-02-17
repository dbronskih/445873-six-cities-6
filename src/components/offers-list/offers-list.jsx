import React, {useState} from 'react';
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";
import {propTypesOffer} from "../../prop-types";

const OffersList = (props) => {
  const {offers} = props;
  const [activeOffer, setActiveOffer] = useState(null);

  const cards = offers.map((offer) =>
    <PlaceCard
      key={`offer-${offer.id}`}
      offer={offer}
      onActive={() => {
        setActiveOffer(offer.id);
      }}
    />,
  );

  return (
    <>
      <pre>activeOffer = {activeOffer}</pre>
      <div className="cities__places-list places__list tabs__content">
        {cards}
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
