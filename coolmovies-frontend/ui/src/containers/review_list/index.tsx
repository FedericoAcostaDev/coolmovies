import React from 'react';
import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';

import { Container } from './styles';
import Card from '../../components/card';
import { parseReviewList } from './utils';
import { ReviewListParam, ReviewData } from './types';

interface ReviewList {
  gqlQuery: any,
}

const ReviewList: React.FC<ReviewList> = ({ gqlQuery }) => {
  const { data } = useQuery(gqlQuery);
  const [reviews, setReviews] = useState([]);
  
  const updateReviewList = (data: ReviewListParam) => {
    const parsedData = parseReviewList(data);
    setReviews(parsedData);
  }

  useEffect(() => { data && updateReviewList(data) }, [data]);

  const cardSize = {
    maxWidth: '400px',
    minWidth: '300px',
    height: 'auto',
    maxHeight: '500px'
  };

  const renderReview = (review: ReviewData) => <Card title={review.title} subtitle={`Rating: ${review.rating}`} text={review.body} hideImage={true} size={cardSize} />;

  return (
    <Container>
      {reviews && reviews.map(review => renderReview(review))}
    </Container>
  )
}

export default ReviewList;