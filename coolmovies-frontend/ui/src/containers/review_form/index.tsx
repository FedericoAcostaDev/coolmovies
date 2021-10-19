import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { useCurrentUserContext } from '../../sevices/hooks/user_auth';
import { getReviews, getMovieReviews, getMovieReviewsByUser } from '../../sevices/queries/movie_reviews';

import { Container } from './styles';
import { ReviewData } from './types';

interface ReviewForm {
  gqlQuery: any,
  id?: string
}

const ReviewForm: React.FC<ReviewForm> = ({ id, gqlQuery }) => {
  const { currentUser } = useCurrentUserContext();

  const [name, setName] = useState("");
  const [movieId, setMovieId] = useState("");
  const [commentary, setCommentary] = useState("");
  const [movieRating, setmovieRating] = useState("");

  const [createMovieReview] = useMutation<ReviewData>(gqlQuery);

  const createReview: Function = (data: ReviewData) => createMovieReview(
    { 
      variables: data,
      refetchQueries: [
        { query: getMovieReviews },
        { query: getReviews },
        { query: getMovieReviewsByUser }
      ]
    });

  const sendReview = () => createReview({
    title: name,
    movieId: movieId,
    userReviewerId: currentUser?.id,
    body: commentary,
    rating: Number(movieRating), 
    id
  });

  return (
    <Container>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)} 
      />
      <input
        type="text"
        onChange={(e) => setMovieId(e.target.value)} 
      />
      <input
        type="text"
        onChange={(e) => setCommentary(e.target.value)} 
      />
      <input
        type="text"
        onChange={(e) => setmovieRating(e.target.value)} 
      />
      <button onClick={sendReview}>
        Enviar
      </button>
    </Container>
  )
}

export default ReviewForm;