const initialState = {
  tvshowChange: [],
  isLoading: true
}

export const changeTvshowItems = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_TV_ITEMS':
      return {
        ...state,
        tvshowChange: action.payload.changeTvshowGenre
      }
    case "LOADING_TV_ITEMS":
      return {
        ...state,
        isLoading: true,
      }
    default:
    return {...state}
  }
}
