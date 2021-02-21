const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = {
    year: `numeric`,
    month: `long`,
  };

  return date.toLocaleString(`en-US`, options);
};

export default formatDate;
