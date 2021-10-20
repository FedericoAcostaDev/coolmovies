import React from 'react';
import { MovieData } from "./types";
import { parseMovieList } from './utils';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

import { Container, ButtonsBox } from './styles';
import Button from '../../components/button';
import Card from '../../components/card';
import { PrimaryTheme } from '../../themes/primary';

interface MoviesList {
  gqlQuery: any,
  params?: any,
  width?: string
}

const MoviesList: React.FC<MoviesList> = ({ gqlQuery, params, width }) => {
  const { error, data } = useQuery(gqlQuery, { variables: params });
  const [movies, setMovies] = useState<Array<MovieData>>([]);

  const updateMovieList = (data: MovieData) => {
    const parsedData = parseMovieList(data);
    setMovies(parsedData);
  }

  useEffect(() => { 
    data && updateMovieList(data)
    error && console.log(error)
  }, [data]);

  return (
    <Container width={width}>
      {movies && movies.map((movie, index) => (
        <Card
        key={index}
        title={movie?.title}
        text={`Directed by ${movie?.directorName} | Total Reviews: ${movie.reviewCount}`}
        subtitle={`Released: ${movie?.releaseDate}`}
        >
          <ButtonsBox>
            <Button text="Add review" link={`/new-movie-review/${movie?.id}`} theme={PrimaryTheme.button} />
            <Button text="See movie's reviews" link={`/movie-reviews/${movie?.id}`} theme={PrimaryTheme.link} />
          </ButtonsBox>
        </Card>
      )
    )}
    </Container>
  )
}

export default MoviesList;