import React from 'react';
import { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import Card from '../../components/card';
import Button from '../../components/button';

import { parseReviewList } from './utils';
import { Container, ButtonsBox } from './styles';
import { ReviewListParam, ReviewData } from './types';
import { deleteMovieReview } from '../../sevices/mutations/movie_review';

interface ReviewList {
  gqlQuery: any,
  params?: any,
  currentUser?: {
    id: string,
    name: string
  }
}

const ReviewList: React.FC<ReviewList> = ({ gqlQuery, params, currentUser }) => {
  const { error, data, refetch } = useQuery(gqlQuery, { variables: params });
  const [deleteReview] = useMutation<ReviewData>(deleteMovieReview);

  const deleteCurrentReview = (param: string) => {
    deleteReview({ variables: { id: param }});
    refetch();
  };

  const [reviews, setReviews] = useState([]);

  const updateReviewList = (data: ReviewListParam) => {
    const parsedData = parseReviewList(data);
    setReviews(parsedData);
  }

  useEffect(() => {
    data && updateReviewList(data);
    error && console.log(error);
  }, [data, currentUser]);

  const cardSize = {
    maxWidth: '400px',
    minWidth: '300px',
    height: 'auto',
    maxHeight: '500px'
  };

  const canUserEditReview = (id: string) => {
    return id === currentUser?.id
  }

  const renderOwnerButtons = (review: ReviewData) => (
    <ButtonsBox>
      <Button text="Edit" size="md" link={`/edit-review/${review.id}`} />
      <Button text="Delete" size="md" color="#b22222" border="1px solid #b22222" onClick={() => deleteCurrentReview(review.id)} />
    </ButtonsBox>
  )

  return (
    <Container>
      {reviews && reviews.map((review: ReviewData, index: number) => 
        <Card
        key={index}
        title={review.title}
        subtitle={`${review.movieTitle} | Rating: ${review.rating}`}
        text={review.body}
        size={cardSize}
        >
          {canUserEditReview(review.userReviewerId) && renderOwnerButtons(review)}
        </Card>
      )}
    </Container>
  )
}

export default ReviewList;