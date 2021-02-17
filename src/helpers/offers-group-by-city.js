const offersGroupByCity = (array) => {
  return array.reduce((acc, obj) => {
    const {city: {name}} = obj;
    acc[name] = acc[name] || [];
    acc[name].push(obj);
    return acc;
  }, {});
};

export default offersGroupByCity;
