export interface ReviewData {
  body: string,
  id: string,
  rating: number,
  title: string,
  userReviewerId: number
}

interface ReviewListData {
  edges: Array<{
    node: ReviewData
  }>
}

export interface ReviewListParam {
  allMovieReviews: ReviewListData
}