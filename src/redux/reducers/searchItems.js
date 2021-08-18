const initialState = {
  searchList: []
}


export const searchItems = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCHED_ITEMS":
      return {
        ...state,
        searchList: action.payload.searchedItemsList
      }
    case "CLEAR_SEARCH":
      return {
        ...state,
        searchList: []
      }
    default:
      return {...state}
  }
}