import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';

import { useCurrentUserContext } from '../../sevices/hooks/user_auth';
import { getReviews, getMovieReviews, getMovieReviewsByUser, getReviewById } from '../../sevices/queries/movie_reviews';

import { Input, Label } from './styles';
import { ReviewData } from './types';

import Card from '../../components/card';
import Button from '../../components/button';

interface ReviewForm {
  gqlQuery: any,
  review?: {
    title: string,
    movieId: string,
    userReviewerId: string,
    body: string,
    rating: number
  },
  id?: string
}

const ReviewForm: React.FC<ReviewForm> = ({ id, gqlQuery, review }) => {
  const { currentUser } = useCurrentUserContext();

  const [name, setName] = useState("");
  const [movieId, setMovieId] = useState("");
  const [commentary, setCommentary] = useState("");
  const [movieRating, setmovieRating] = useState<number>();

  useEffect(() => { 
   if(review){
      setName(review?.title);
      setMovieId(review?.movieId);
      setCommentary(review?.body);
      setmovieRating(review?.rating);
   } 
  });

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
    <Card title="Review form" size={{ height: '100%', maxHeight: '550px' }} subtitle="Tell us what you think">
      <Label>Title</Label>
      <Input
        type="text"
        onChange={(e) => setName(e.target.value)} 
      />
      <Label>Movie id</Label>
      <Input
        type="text"
        onChange={(e) => setMovieId(e.target.value)} 
      />
      <Label>Review</Label>
      <Input
        type="text"
        onChange={(e) => setCommentary(e.target.value)} 
      />
      <Label>Rating</Label>
      <Input
        type="number"
        onChange={(e) => setmovieRating(Number(e.target.value))} 
      />
      <Button text="Send" onClick={sendReview} />
    </Card>
  )
}

export default ReviewForm;