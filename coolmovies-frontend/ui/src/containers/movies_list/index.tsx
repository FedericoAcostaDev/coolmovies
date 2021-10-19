import React from 'react';
import { MovieData } from "./types";
import { parseMovieList } from './utils';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

import { FaSpinner } from 'react-icons/fa';
import { Container } from './styles';
import Card from '../../components/card';

interface MoviesList {
  gqlQuery: any,
  params?: any,
  width?: string
}

const MoviesList: React.FC<MoviesList> = ({ gqlQuery, params, width, children }) => {
  const { error, loading, data } = useQuery(gqlQuery, { variables: params });
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
          {children}
        </Card>
      )
    )}
    </Container>
  )
}

export default MoviesList;