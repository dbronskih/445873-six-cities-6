import React, {useState} from 'react';
import PropTypes from "prop-types";

const ReviewsForm = () => {
  const [formData, setFormData] = useState({
    rating: 0,
    review: ``,
  });

  const {rating, review} = formData;

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const RatingElementStar = ({id}) => {
    return <>
      <input
        onChange={handleFieldChange}
        checked={+rating === id}
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={id}
        id={`${id}-stars`}
        type="radio"
      />
      <label
        htmlFor={`${id}-stars`}
        className="reviews__rating-label form__rating-label"
        title="perfect"
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star"/>
        </svg>
      </label>
    </>;
  };

  RatingElementStar.propTypes = {
    id: PropTypes.number.isRequired,
  };

  const RatingGroup = [5, 4, 3, 2, 1].map((id) => {
    return <RatingElementStar key={`${id}-stars`} id={id}/>;
  });

  return (
    <>
      <form className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {RatingGroup}
        </div>
        <textarea
          onChange={handleFieldChange}
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          value={review}
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
            stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
        </div>
      </form>
    </>
  );
};

export default ReviewsForm;
