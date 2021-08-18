import axios from 'axios'

import {changeableTvGenre} from '../../api'

export const loadChangedTvshowItems = (id, page) => async (dispatch) => {
  dispatch({
    type: 'LOADING_TV_ITEMS'
  })
  const tvshowChanged = await axios.get(changeableTvGenre(id, page))

  dispatch({
    type: 'CHANGE_TV_ITEMS',
    payload: {
      changeTvshowGenre: tvshowChanged.data.results
    }
  })
}