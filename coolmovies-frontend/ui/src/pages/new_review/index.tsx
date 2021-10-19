import React from 'react';
import BgImg from '../../images/popcorn.jpg';
import { useParams } from 'react-router';

import Box from '../../components/box';
import ReviewForm from '../../containers/review_form';

interface NewReviewPage {
  gqlQuery: any
}

const NewReview: React.FC<NewReviewPage> = (props) => {
  const { id } = useParams<{ id?: string }>();

  return (
    <Box backgroundImage={BgImg}>
      <ReviewForm gqlQuery={props.gqlQuery} id={id} />
    </Box>
  )
}

export default NewReview;