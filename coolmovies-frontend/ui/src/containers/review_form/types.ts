export interface ReviewFormType {
  gqlQuery: any,
  review?: {
    title: string,
    movieId: string,
    userReviewerId: string,
    body: string,
    rating: number
  },
  id?: string,
  movie?: string
}
export interface ReviewData {
  title: string,
  movieId: string,
  userReviewerId: string,
  body: string,
  rating: number,
  id: string
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