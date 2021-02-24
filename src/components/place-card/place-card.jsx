import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {propTypesOffer} from "../../prop-types";
import {COEFFICIENT_RATING} from '../../helpers/constants';
import cardSettings from "../../helpers/card-settings";

const PlaceCard = (props) => {
  const {offer, cardType, onActive} = props;
  const {id, isPremium, previewImage, price, rating, title, type} = offer;
  const cardConfig = cardSettings(cardType);

  return (
    <article
      onMouseEnter={onActive}
      className={`place-card ${cardConfig.cardClass}`}>
      {isPremium && <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className={`place-card__image-wrapper ${cardConfig.imgWrapClass}`}>
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={cardConfig.imgSizes.width}
            height={cardConfig.imgSizes.height}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={`place-card__info ${cardConfig.infoClass}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * COEFFICIENT_RATING}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  onActive: PropTypes.func.isRequired,
  offer: PropTypes.shape(propTypesOffer).isRequired,
  cardType: PropTypes.string.isRequired,
};

export default PlaceCard;
