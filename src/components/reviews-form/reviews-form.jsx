import React, {Fragment, useState} from 'react';

const RATING_LIST = [...Array(5)].map((e, i) => i + 1);

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

  return (
    <>
      <form className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {RATING_LIST.map((id) => {
            return (
              <Fragment key={`${id}-stars`}>
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
              </Fragment>
            );
          })
          }
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
