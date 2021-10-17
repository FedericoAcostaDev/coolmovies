import React from 'react';
import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { getReviews } from '../../sevices/queries/movie_reviews';

import { Container } from './styles';
import { parseReviewList } from './utils';
import { ReviewListParam, ReviewData } from './types';

const ReviewList: React.FC = () => {
  const { data } = useQuery(getReviews);
  const [reviews, setReviews] = useState([]);
  
  const updateReviewList = (data: ReviewListParam) => {
    const parsedData = parseReviewList(data);
    setReviews(parsedData);
  }

  useEffect(() => { data && updateReviewList(data) }, [data]);

  const renderReview = (review: ReviewData) => <h1>{review.title}</h1>;

  return (
    <Container>
      {reviews && reviews.map(review => renderReview(review))}
    </Container>
  )
}

export default ReviewList;