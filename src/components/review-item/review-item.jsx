import React from 'react';
import formatDate from "../../helpers/format-date";
import {COEFFICIENT_RATING} from "../../helpers/constants";
import PropTypes from "prop-types";
import propTypesComment from "../../prop-types/propTypesComment";

const ReviewItem = ({objComment}) => {
  const {comment, rating, date, user: {avatarUrl, name}} = objComment;
  const formatDateStr = formatDate(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${COEFFICIENT_RATING * rating}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{formatDateStr}</time>
      </div>
    </li>
  );
};

ReviewItem.propTypes = {
  objComment: PropTypes.shape(propTypesComment).isRequired,
};
export default ReviewItem;
