import React from 'react';
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { listMovies } from '../../sevices/queries/movies';

const MoviesList: React.FC = () => {
  const { error, loading, data } = useQuery(listMovies);
  const [movies, setMovies] = useState([]);

  useEffect(() => { data && setMovies(data.allMovies.edges) }, [data]);

  console.log(movies)

  return (
    <div>
      
    </div>
  )
}

export default MoviesList;