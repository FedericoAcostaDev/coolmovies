export interface ReviewData {
  body: string,
  id: string,
  rating: number,
  title: string,
  userReviewerId: string,
  movieTitle?: string,
  movieByMovieId?: {
    title: string
  }
}

interface ReviewListData {
  edges: Array<{
    node: ReviewData
  }>
}

export interface ReviewListParam {
  allMovieReviews: ReviewListData
}