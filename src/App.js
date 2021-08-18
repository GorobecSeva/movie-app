import React, { useEffect, useState } from 'react';
import Carousel from './components/Carousel';
import Content from './components/Content';
import Header from './components/Header';
import Search from './components/Search';
import { useDispatch, useSelector } from 'react-redux';
import { loadItems } from './redux/actions/items';
import { loadChangedFilmItems } from './redux/actions/changeMoviesItems';
import { loadChangedTvshowItems } from './redux/actions/changeTvshowItems';
import { clearSearch, searchItems } from './redux/actions/searchItems'

import './scss/index.scss'
import Loading from './components/Loading';

function App() {
  const [filmPages, setFilmPages] = useState(1)
  const [tvShowPages, setTvShowPages] = useState(1)

  const [genreFilmId] = useState(28)
  const [genreTvShowId] = useState(10759)

  const [totalPages] = useState(500)
  const [searchValue, setSearchValue] = useState('')

  const dispatch = useDispatch()

  const {movies, tvshows, movieGenres, tvshowGenres} = useSelector(state => state.items)
  const {movieChange} = useSelector(state => state.changeMovieItems)
  const {tvshowChange} = useSelector(state => state.changeTvshowItems)
  const {searchList} = useSelector(state => state.searchItems)
  
  useEffect(() => {
    dispatch(loadItems())
  }, [dispatch])

  const handleClick = (id) => {
    dispatch(loadChangedFilmItems(id, filmPages))
    setFilmPages(1)
  }
  
  const handleClickButton = (filmPages) => {
    dispatch(loadChangedFilmItems(genreFilmId, filmPages))
    setFilmPages(filmPages)
  }
  
  const handleTvShowGenreClick = (id) => {
    dispatch(loadChangedTvshowItems(id, tvShowPages))
    setTvShowPages(1)
  }

  const handleTvShowClickButton = (tvShowPages) => {
    dispatch(loadChangedTvshowItems(genreTvShowId, tvShowPages))
    setTvShowPages(tvShowPages)
  }

  const onChangeInput = (e) => {
    let res = e.target.value
    setSearchValue(res);
  }

  const onInputSubmitHandler = () => {
    dispatch(searchItems(searchValue))
    setSearchValue(' ')
  }

  const onResetButton = () => {
    dispatch(clearSearch())
  }
  
  return (
    <>
      <Header
        handleClick={handleClick}
        movieGenres={movieGenres}
        tvshowGenres={tvshowGenres}
        handleTvShowGenreClick={handleTvShowGenreClick}
        onChangeInput={onChangeInput}
        onInputSubmitHandler={onInputSubmitHandler}
        searchValue={searchValue}
      />
      <Carousel/>
      {searchList ? <Search onResetButton={onResetButton} searchList={searchList} /> : ''}
      {movies.length ? <Content
        movies={movies}
        movieChange={movieChange}
        tvShowPages={tvShowPages}
        tvshowChange={tvshowChange}
        handleClickButton={handleClickButton}
        handleTvShowClickButton={handleTvShowClickButton}
        totalPages={totalPages}
        tvshows={tvshows}
        filmPages={filmPages}
      /> 
        : <Loading/>
      }
    </>
  );
}

export default App;
