import {ActionType} from '../actions';
import {Cities} from '../../helpers/constants';

const initialState = Cities.PARIS;

export const currentCityName = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.SET_CITY:
      return action.payload;

    default: return state;
  }
};
