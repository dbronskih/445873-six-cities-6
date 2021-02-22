import React from 'react';
import ReviewsForm from "../reviews-form/reviews-form";
import ReviewItem from "../review-item/review-item";
import PropTypes from "prop-types";
import propTypesComment from "../../prop-types/propTypesComment";

const ReviewsList = (props) => {
  const {comments} = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">

        {comments.map((objComment) => <ReviewItem key={`comment-${objComment.id}`} objComment={objComment}/>)}

      </ul>

      <ReviewsForm/>

    </section>
  );
};

ReviewsList.propTypes = {
  comments: PropTypes.arrayOf(
      PropTypes.shape(propTypesComment)
  ).isRequired,
};

export default ReviewsList;
