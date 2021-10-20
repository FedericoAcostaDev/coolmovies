import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';

import { useCurrentUserContext } from '../../sevices/hooks/user_auth';
import { getReviews } from '../../sevices/queries/movie_reviews';

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
  id?: string,
  movie?: string
}

const ReviewForm: React.FC<ReviewForm> = ({ id, gqlQuery, review, movie }) => {
  const { currentUser } = useCurrentUserContext();

  const [name, setName] = useState("");
  const [movieId, setMovieId] = useState("");
  const [commentary, setCommentary] = useState("");
  const [movieRating, setmovieRating] = useState<number>(0);

  const [createMovieReview] = useMutation<ReviewData>(gqlQuery);

  useEffect(() => {
    if(review){
      setName(review?.title);
      setMovieId(review?.movieId);
      setCommentary(review?.body);
      setmovieRating(review?.rating);
    };

    movie && setMovieId(movieId)
  }, [review, movie])

  const createReview: Function = (data: ReviewData) => createMovieReview(
    { 
      variables: data,
      refetchQueries: [
        { query: getReviews }
      ]
    });

  const sendReview = () => (id || movieId) && createReview({
    title: name,
    movieId: movieId,
    userReviewerId: currentUser?.id,
    body: commentary,
    rating: Number(movieRating), 
    id
  });

  return (
    <Card title="Review form" size={{ height: '100%', maxHeight: '500px' }} subtitle="Tell us what you think">
      <Label>Title</Label>
      <Input
        type="text"
        defaultValue={name}
        onChange={(e) => setName(e.target.value)} 
      />
      {!review?.movieId && 
        (<>
          <Label>Movie id</Label>
          <Input
            type="text"
            defaultValue={movieId}
            onChange={(e) => setMovieId(e.target.value)} 
          />
        </>)
      }
      <Label>Review</Label>
      <Input
        type="text"
        defaultValue={commentary}
        onChange={(e) => setCommentary(e.target.value)} 
      />
      <Label>Rating</Label>
      <Input
        type="number"
        defaultValue={Number(movieRating) || 0}
        onChange={(e) => setmovieRating(Number(e.target.value))} 
      />
      <Button text="Send" onClick={sendReview} />
    </Card>
  )
}

export default ReviewForm;