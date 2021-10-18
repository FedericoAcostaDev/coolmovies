import { MoviesListParam } from "./types";

export const parseMovieList: Function = (params: MoviesListParam) => {
  const { allMovies } = params;
  const { edges } = allMovies;

  return edges.map(({ node }) => {
    const { 
      id,
      title,
      releaseDate,
      movieDirectorByMovieDirectorId,
      movieReviewsByMovieId
    } = node;

    return {
      id,
      title,
      releaseDate,
      directorName: movieDirectorByMovieDirectorId?.name,
      reviewCount: movieReviewsByMovieId?.totalCount
    }
  })
};
