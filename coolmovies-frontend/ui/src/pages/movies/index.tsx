import React from 'react';
import Box from '../../components/box';
import Button from '../../components/button';
import { ButtonsBox } from './styles';

import MoviesList from '../../containers/movies_list';
import { PrimaryTheme } from '../../themes/primary';
import BgImg from '../../images/ticket.jpg';

interface MoviesProps {
  gqlQuery: any,
}

const Movies: React.FC<MoviesProps> = ({ gqlQuery }) => { 
  return (
    <Box backgroundImage={BgImg}>
      <MoviesList gqlQuery={gqlQuery} width="70%">
        <ButtonsBox>
          <Button text="Add review" theme={PrimaryTheme.button} />
          <Button text="See movie's reviews" theme={PrimaryTheme.link} />
        </ButtonsBox>
      </MoviesList>
    </Box>
  )
}

export default Movies;