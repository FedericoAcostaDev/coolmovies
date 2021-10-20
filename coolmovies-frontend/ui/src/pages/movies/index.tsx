import React from 'react';
import Box from '../../components/box';
import MoviesList from '../../containers/movies_list';
import BgImg from '../../images/ticket.jpg';

interface MoviesProps {
  gqlQuery: any,
}

const Movies: React.FC<MoviesProps> = ({ gqlQuery }) => { 
  return (
    <Box backgroundImage={BgImg}>
      <MoviesList gqlQuery={gqlQuery} width="70%"/>
    </Box>
  )
}

export default Movies;