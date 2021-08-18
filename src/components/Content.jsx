import React from 'react'
import FilmsItem from './FilmsItem'

function Content({movies, movieChange, filmPages, tvshowChange, totalPages, tvShowPages, handleClickButton, handleTvShowClickButton, tvshows}) {
  const onClickPrevPage = () => {
    handleClickButton(filmPages - 1)
  }
  const onClickNextPage = () => {
    handleClickButton(filmPages + 1)
  }

  const onClickPrevTvBtn = () => {
    handleTvShowClickButton(tvShowPages - 1)
  }
  const onClickNextTvBtn = () => {
    handleTvShowClickButton(tvShowPages + 1)
  }

  const itemsMovie = movieChange.length ? movieChange : movies
  const itemsTv = tvshowChange.length ? tvshowChange : tvshows

  return (
    <div className="container">
      <div className="content">
        <div id="films" className="content__wrap">
          <div className="content__wrap-title">
            <h2>Фильмы</h2>
          </div>
          <div className="content__wrap-items">
            {
              itemsMovie.map((item) => (
                <FilmsItem key={item.id} title={item.title} imageUrl={item.backdrop_path} rating={item.vote_average} release={item.release_date}/>
              ))
            }
          </div>
          <div className="content__pagination">
            <button 
              onClick={onClickPrevPage}
              disabled={filmPages === 1}
            >
              Назад
            </button>
              <span>{filmPages} из {totalPages}</span>
            <button
              onClick={onClickNextPage}
            >
              Вперед
            </button>
          </div>
        </div>
        <div id="tvshows" className="content__wrap">
        <div className="content__wrap-title">
          <h2>ТВ шоу</h2>
        </div>
        <div className="content__wrap-items">
          {
            itemsTv.map((item) => (
              <FilmsItem 
                key={item.id} 
                title={item.name} 
                imageUrl={item.backdrop_path} 
                rating={item.vote_average} 
                release={item.first_air_date}
              />
            ))
          }
        </div>
          <div className="content__pagination">
            <button 
              onClick={onClickPrevTvBtn}
              disabled={tvShowPages === 1}
            >
              Назад
            </button>
              <span>{tvShowPages} из {totalPages}</span>
            <button
              onClick={onClickNextTvBtn}
            >
              Вперед
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
