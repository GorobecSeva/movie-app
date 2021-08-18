import {createStore, compose, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {items} from './items'
import {changeMovieItems} from './changeMovieItems'
import {changeTvshowItems} from './changeTvshowItems'
import {searchItems} from './searchItems'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  items,
  changeMovieItems,
  changeTvshowItems,
  searchItems
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store