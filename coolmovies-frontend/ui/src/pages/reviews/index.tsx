import React, { useEffect } from 'react';
import BgImg from '../../images/popcorn.jpg';

import Box from '../../components/box';
import ReviewList from '../../containers/review_list';

import { useCurrentUserContext } from '../../sevices/context/user_auth';

interface ReviewPage {
  gqlQuery: any,
  params?: any
}

const Reviews: React.FC<ReviewPage> = (props) => {
  const { fetchUser, currentUser } = useCurrentUserContext();

  useEffect(() => {
    fetchUser();
  }, [currentUser])

  return (
    <Box backgroundImage={BgImg}>
      <ReviewList gqlQuery={props.gqlQuery} params={props.params} currentUser={currentUser} />
    </Box>
  )
}

export default Reviews;