import {ActionType} from '../actions';
import Comments from '../../mocks/comments';


const initialState = {
  isLoaded: false,
  entities: [],
  comments: Comments,
};

export const offers = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        isLoaded: true,
        entities: action.payload,
      };
    default: return state;
  }
};
