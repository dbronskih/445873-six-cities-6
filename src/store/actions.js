export const ActionType = {
  SET_CITY: `MAIN/SET_CITY`,
  SET_OFFERS: `MAIN/SET_OFFERS`,
  SET_SORT_ORDER: `MAIN/SET_SORT_ORDER`,
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
  setSortOrder: (sortOrder) => ({
    type: ActionType.SET_SORT_ORDER,
    payload: sortOrder,
  })
};
