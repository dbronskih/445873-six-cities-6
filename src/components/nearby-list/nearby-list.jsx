import React, {useState} from 'react';
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";
import {propTypesOffer} from "../../prop-types";
import {NEARBY_OFFERS} from "../../helpers/constants";

const NearbyList = (props) => {
  const {offers} = props;
  const [, setActiveOffer] = useState(null);

  return (
    <>
      <div className="near-places__list places__list">
        {offers.map((offer) =>
          <PlaceCard
            key={`offer-${offer.id}`}
            offer={offer}
            cardType={NEARBY_OFFERS}
            onActive={() => {
              setActiveOffer(offer.id);
            }}
          />,
        )}
      </div>
    </>
  );
};

NearbyList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(propTypesOffer),
  ).isRequired,
};

export default NearbyList;
