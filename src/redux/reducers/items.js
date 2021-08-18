const initialState = {
  movies: [],
  tvshows: [],
  movieGenres: [],
  tvshowGenres: [],
  isLoading: false
}


export const items = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ITEMS":
      return {
        ...state,
        movies: action.payload.movie,
        tvshows: action.payload.tvshow,
        movieGenres: action.payload.movieGenre,
        tvshowGenres: action.payload.tvshowGenre
      }
    default:
      return {...state}
  }
} 