const initialState = {
  movieChange: [],
  isLoading: true
}

export const changeMovieItems = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_MOVIE_ITEMS':
      return {
        ...state,
        movieChange: action.payload.changeMovieGenre,
      }
    case "LOADING_MOVIE_ITEMS":
      return {
        ...state,
        isLoading: true,
      }
    default:
    return {...state}
  }
}
