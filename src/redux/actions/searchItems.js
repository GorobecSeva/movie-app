import axios from 'axios'
import {search} from '../../api'

export const searchItems = (query) => async (dispatch) => {
  const searchedItems = await axios.get(search(query))
  dispatch({
    type: 'SEARCHED_ITEMS',
    payload: {
      searchedItemsList: searchedItems.data.results
    }
  })
}

export const clearSearch = () => ({
  type: 'CLEAR_SEARCH'
})