import axios from 'axios'

import {changeableGenre} from '../../api'

export const loadChangedFilmItems = (id, page) => async (dispatch) => {
  dispatch({
    type: 'LOADING_MOVIE_ITEMS'
  })
  const movieChanged = await axios.get(changeableGenre(id, page))

  dispatch({
    type: 'CHANGE_MOVIE_ITEMS',
    payload: {
      changeMovieGenre: movieChanged.data.results,
    }
  })
}