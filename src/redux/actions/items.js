import axios from 'axios'

import {tvshowsUrl, moviesUrl, movieGenres, tvshowsGenresUrl} from '../../api'

export const loadItems = () => async (dispatch) => {
  const movieData = await axios.get(moviesUrl)
  const tvshowData = await axios.get(tvshowsUrl)
  const movieGenreData = await axios.get(movieGenres)
  const tvshowGenreData = await axios.get(tvshowsGenresUrl)
  dispatch({
    type: "GET_ITEMS",
    payload: {
      movie: movieData.data.results,
      tvshow: tvshowData.data.results,
      movieGenre: movieGenreData.data.genres,
      tvshowGenre: tvshowGenreData.data.genres,
    }
  })
}