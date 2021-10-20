import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { getReviewById } from '../../sevices/queries/movie_reviews';

import BgImg from '../../images/popcorn.jpg';
import { useParams } from 'react-router';

import Box from '../../components/box';
import ReviewForm from '../../containers/review_form';
interface NewReviewPage {
  gqlQuery: any
}

interface ReviewData {
  movieReviewById: {
    title: string,
    movieId: string,
    userReviewerId: string,
    body: string,
    rating: number
  }
}

const NewReview: React.FC<NewReviewPage> = ({ gqlQuery }) => {
  const { id, movieId } = useParams<{ id?: string, movieId?: string }>();
  const [reviewData, setReviewData] = useState<ReviewData>();
  
  const { error, loading, data } = useQuery(getReviewById, 
    { 
      variables: { id: id },
      skip: !id
   });

  useEffect(() => {
    if(!loading) {
      data && setReviewData(data);
      error && console.log(error);
    }
  }, [data])

  return (
    <Box backgroundImage={BgImg}>
      {!loading && <ReviewForm gqlQuery={gqlQuery} id={id} movie={movieId} review={reviewData?.movieReviewById} />}
    </Box>
  )
}

export default NewReview;