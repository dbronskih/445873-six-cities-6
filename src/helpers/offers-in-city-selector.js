import {SortOrders} from './constants';

const offersInCitySelector = ({offers, currentCityName, sortOrder}) => {
  offers = offers.entities.filter(
      ({city: {name}}) => name === currentCityName
  );

  switch (sortOrder) {
    case SortOrders.RATING:
      offers.sort((a, b) => b.rating - a.rating);
      break;
    case SortOrders.PRICE_UP:
      offers.sort((a, b) => a.price - b.price);
      break;
    case SortOrders.PRICE_DOWN:
      offers.sort((a, b) => b.price - a.price);
      break;
  }
  return offers;
};

export default offersInCitySelector;
