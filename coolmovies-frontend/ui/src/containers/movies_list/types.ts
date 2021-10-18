export interface MovieData {
  id: string,
  releaseDate: string,
  title: string,
  movieDirectorByMovieDirectorId?: {
    name?: string
  },
  directorName?: string,
  movieReviewsByMovieId: {
    totalCount: number
  },
  reviewCount: number
}

interface MoviesListData {
  edges: Array<{
    node: MovieData
  }>
}

export interface MoviesListParam {
  allMovies: MoviesListData
}