export interface ReviewData {
  title: string,
  movieId: string,
  userReviewerId: string,
  body: string,
  rating: number
}

export interface CurrentUserData {
  name: string,
  id: string,
  commentsByUserId: {
    totalCount: number
  }
}

export interface FetchCurrentUserData {
  currentUser: CurrentUserData
}