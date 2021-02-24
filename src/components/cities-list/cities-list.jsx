import React from 'react';
import PropTypes from 'prop-types';
import {Cities} from '../../helpers/constants';

export const CitiesList = (props) => {
  const {currentCityName, onSetCity} = props;

  return (
    <ul className="locations__list tabs__list">
      {Object.keys(Cities).map((key) => (
        <li onClick={() => onSetCity(Cities[key])} className="locations__item" key={Cities[key]}>
          <a className={`locations__item-link tabs__item${Cities[key] === currentCityName ? ` tabs__item--active` : ``}`}>
            <span>{Cities[key]}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

CitiesList.propTypes = {
  currentCityName: PropTypes.string.isRequired,
  onSetCity: PropTypes.func.isRequired,
};

export default CitiesList;
