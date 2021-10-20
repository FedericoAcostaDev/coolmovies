import React from 'react';
import { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import Card from '../../components/card';
import Button from '../../components/button';

import { parseReviewList } from './utils';
import { Container, ButtonsBox } from './styles';
import { ReviewListParam, ReviewData, ReviewListTypes } from './types';
import { deleteMovieReview } from '../../sevices/mutations/movie_review';


const ReviewList: React.FC<ReviewListTypes> = ({ gqlQuery, params, currentUser }) => {
  const { error, data, refetch } = useQuery(gqlQuery, { variables: params });
  const [reviews, setReviews] = useState([]);
  const [deleteReview] = useMutation<ReviewData>(deleteMovieReview);

  const deleteCurrentReview = (param: string) => {
    deleteReview({ variables: { id: param }});
    refetch();
  };

  const updateReviewList = (data: ReviewListParam) => {
    const parsedData = parseReviewList(data);
    setReviews(parsedData);
  }

  useEffect(() => {
    data && updateReviewList(data);
    error && console.log(error);
  }, [data, currentUser]);

  const canUserEditReview = (id: string) => id === currentUser?.id;

  const renderOwnerButtons = (review: ReviewData) => (
    <ButtonsBox>
      <Button text="Edit" size="md" link={`/edit-review/${review.id}`} />
      <Button text="Delete" size="md" color="#b22222" border="1px solid #b22222" onClick={() => deleteCurrentReview(review.id)} />
    </ButtonsBox>
  )

  const cardSize = {
    maxWidth: '400px',
    minWidth: '300px',
    height: 'auto',
    maxHeight: '500px'
  };

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