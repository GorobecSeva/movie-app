import React from 'react'

function SearchItem({id, backdrop_path, title, name, vote_average, release_date, first_air_date, overview, poster_path}) {
  return (
    <div className="search__item" key={id}>
      <img src={backdrop_path ? `https://image.tmdb.org/t/p/w500${backdrop_path}` || `https://image.tmdb.org/t/p/w500${poster_path}` : 'http://placehold.it/500x280'} alt=""/>
      <div className="search__item-description">
        <h4><span>Название: </span>{title ? title : name}</h4>
        <h4><span>Рейтинг: </span>{vote_average ? vote_average : ' - '}</h4>
        <h4><span>Дата выхода: </span>{release_date ? release_date : first_air_date}</h4>
        <p><span>Описание: </span>{overview ? overview : 'Нет обзора, переведённого на русский язык. Помогите расширить базу данных, добавив его.'}</p>
      </div>
    </div>
  )
}

export default React.memo(SearchItem)
