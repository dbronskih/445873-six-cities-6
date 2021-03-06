import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/actions';
import PropTypes from "prop-types";
import OffersList from "../offers-list/offers-list";
import {propTypesOffer} from "../../prop-types";
import Map from "../map/map";
import CitiesList from "../cities-list/cities-list";
import SortSelect from "../sort-select/sort-select";
import {SortOrders} from "../../helpers/constants";
import offersInCitySelector from "../../helpers/offers-in-city-selector";
import {fetchOffers} from "../../store/api-actions";
import Loading from "../loading/loading";

const MainScreen = (props) => {
  const {
    offers,
    currentCityName,
    onSetCity,
    sortOrder,
    onSetSortOrder,
    isOffersLoaded,
    onLoadOffers,
  } = props;

  const offersCount = offers.length;

  const [activeOfferId, setActiveOfferId] = useState(null);

  const onChangeActiveOffer = (id) => {
    setActiveOfferId(id);
  };

  useEffect(() => {
    if (!isOffersLoaded) {
      onLoadOffers();
    }
  }, [isOffersLoaded]
  );

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {!isOffersLoaded
        ?
        <Loading/>
        :
        (
          <main className="page__main page__main--index">
            <h1 className="visually-hidden">Cities</h1>
            <div className="tabs">
              <section className="locations container">

                <CitiesList
                  currentCityName={currentCityName}
                  onSetCity={onSetCity}
                />

              </section>
            </div>
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{offersCount} places to stay in {currentCityName}</b>

                  <SortSelect order={sortOrder} onSetOrder={onSetSortOrder}/>

                  <OffersList offers={offers} onChangeActiveOffer={onChangeActiveOffer}/>

                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    {offersCount && <Map offers={offers} city={offers[0].city} activeOfferId={activeOfferId} />}
                  </section>
                </div>
              </div>
            </div>
          </main>
        )}


    </div>
  );
};

MainScreen.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(propTypesOffer)
  ).isRequired,
  currentCityName: PropTypes.string.isRequired,
  onSetCity: PropTypes.func.isRequired,
  sortOrder: PropTypes.oneOf(Object.values(SortOrders)),
  onSetSortOrder: PropTypes.func,
  onLoadOffers: PropTypes.func,
  isOffersLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  offers: offersInCitySelector(state),
  currentCityName: state.currentCityName,
  sortOrder: state.sortOrder,
  isOffersLoaded: state.offers.isLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadOffers() {
    dispatch(fetchOffers());
  },
  onSetCity(cityName) {
    dispatch(ActionCreator.setCity(cityName));
  },
  onSetSortOrder(sortOrder) {
    dispatch(ActionCreator.setSortOrder(sortOrder));
  },
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
