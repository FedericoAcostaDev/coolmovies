import React from 'react';
import Box from '../../components/box';
import { Title } from './styles';

interface ReviewsProps {
  title: string,
}

const Reviews: React.FC<ReviewsProps> = ({ title }) => { 
  return (
    <Box>
      <Title>
        {title}
      </Title>
    </Box>
  )
}

Reviews.defaultProps = {
  title: 'Welcome back!'
}

export default Reviews;