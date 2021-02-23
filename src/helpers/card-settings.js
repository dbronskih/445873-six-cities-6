import {CardTypes} from "./constants";
const {FAVORITES_OFFERS, MAIN_OFFERS, NEARBY_OFFERS} = CardTypes;

const cardsSettings = {
  [MAIN_OFFERS]: {
    cardClass: `cities__place-card`,
    imgWrapClass: `cities__image-wrapper`,
    infoClass: ``,
    imgSizes: {height: 200, width: 260},
  },
  [FAVORITES_OFFERS]: {
    cardClass: `favorites__card`,
    imgWrapClass: `favorites__image-wrapper`,
    infoClass: `favorites__card-info`,
    imgSizes: {height: 110, width: 150},
  },
  [NEARBY_OFFERS]: {
    cardClass: `near-places__card`,
    imgWrapClass: `near-places__image-wrapper`,
    infoClass: ``,
    imgSizes: {height: 200, width: 260},
  },
};

const cardSettings = (cardType) => {
  return cardsSettings[cardType] || {};
};

export default cardSettings;
