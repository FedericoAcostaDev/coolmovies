import React from 'react';
import { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';

import Card from '../../components/card';
import Button from '../../components/button';

import { parseReviewList } from './utils';
import { Container } from './styles';
import { ReviewListParam, ReviewData } from './types';

interface ReviewList {
  gqlQuery: any,
  params?: any,
  currentUser?: {
    id: string,
    name: string
  }
}

const ReviewList: React.FC<ReviewList> = ({ gqlQuery, params, currentUser }) => {
  const { data } = useQuery(gqlQuery, { variables: params });
  const [reviews, setReviews] = useState([]);
  
  const updateReviewList = (data: ReviewListParam) => {
    const parsedData = parseReviewList(data);
    setReviews(parsedData);
  }

  useEffect(() => { data && updateReviewList(data) }, [data, currentUser]);

  const cardSize = {
    maxWidth: '400px',
    minWidth: '300px',
    height: 'auto',
    maxHeight: '500px'
  };

  const canUserEditReview = (id: string) => {
    return id === currentUser?.id
  }

  const renderReview = (review: ReviewData, index: number) => (
    <Card
      key={index}
      title={review.title}
      subtitle={`${review.movieTitle} | Rating: ${review.rating}`}
      text={review.body}
      hideImage={true}
      size={cardSize}
    >
      {canUserEditReview(review.userReviewerId) && <Button text="Editar review" size="sm" />}
    </Card>
  );

  return (
    <Container>
      {reviews && reviews.map((review, index) => renderReview(review, index))}
    </Container>
  )
}

export default ReviewList;