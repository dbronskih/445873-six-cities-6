export const ActionType = {
  SET_CITY: `MAIN/SET_CITY`,
  SET_OFFERS: `MAIN/SET_OFFERS`,
};

export const ActionCreator = {
  setCity: (cityName) => ({
    type: ActionType.SET_CITY,
    payload: cityName,
  }),
  setOffers: (offers) => ({
    type: ActionType.SET_OFFERS,
    payload: offers,
  }),
};
