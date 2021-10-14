import { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import { setMovieReview } from '../../sevices/mutations/movie_review';
import { getCurrentUserData } from '../../sevices/queries/users';

interface ReviewData {
  title: string,
  movieId: string,
  userReviewerId: string,
  body: string,
  rating: number
}

function ReviewForm(){
  const [name, setName] = useState("");
  const [movieId, setMovieId] = useState("");
  const [commentary, setCommentary] = useState("");
  const [movieRating, setmovieRating] = useState("");
  const [currentUser, setCurrentUser] = useState("");

  const { data } = useQuery(getCurrentUserData);
  const [createMovieReview] = useMutation(setMovieReview);

  useEffect(() => { data && setCurrentUser(data.currentUser.id) }, [data]);

  const createReview: Function = (params: ReviewData) => createMovieReview({ variables: params });

  const sendReview = () => createReview({
    title: name,
    movieId: movieId,
    userReviewerId: currentUser,
    body: commentary,
    rating: Number(movieRating)
  });

  return (
    <div>
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
    </div>
  )
}

export default ReviewForm;