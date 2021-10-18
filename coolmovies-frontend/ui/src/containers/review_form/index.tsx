import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import { setMovieReview } from '../../sevices/mutations/movie_review';
import { getCurrentUserData } from '../../sevices/queries/users';

import { Container } from './styles';
import { ReviewData, FetchCurrentUserData } from './types';

const ReviewForm: React.FC = () => {
  const [name, setName] = useState("");
  const [movieId, setMovieId] = useState("");
  const [commentary, setCommentary] = useState("");
  const [movieRating, setmovieRating] = useState("");
  const [currentUser, setCurrentUser] = useState("");

  const { error, data } = useQuery<FetchCurrentUserData>(getCurrentUserData);
  const [createMovieReview] = useMutation<ReviewData>(setMovieReview);

  useEffect(() => { 
    data && setCurrentUser(data.currentUser.id);
    error && console.log(error);
  }, [data]);

  const createReview: Function = (params: ReviewData) => createMovieReview({ variables: params });

  const sendReview = () => createReview({
    title: name,
    movieId: movieId,
    userReviewerId: currentUser,
    body: commentary,
    rating: Number(movieRating)
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