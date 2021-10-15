import React from 'react';
import Box from '../../components/box';
import { Title } from './styles';

interface MoviesProps {
  title: string,
}

const Movies: React.FC<MoviesProps> = ({ title }) => { 
  return (
    <Box>
      <Title>
        {title}
      </Title>
    </Box>
  )
}

Movies.defaultProps = {
  title: 'Welcome back!'
}

export default Movies;