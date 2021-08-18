import React from 'react'

function FilmsItem({title, imageUrl, rating, release}) {
  return (
    <div className='film-item'>
      <div className="film-item__layout">
        <img src={imageUrl ? `https://image.tmdb.org/t/p/w500${imageUrl}` : 'http://placehold.it/300x304'} alt=""/>
      </div>
      <div className="film-item__layout-content">
        <h4><span>Название: </span>{title}</h4>
        <h4><span>Рейтинг: </span> {rating}</h4>
        <h4><span>Дата выхода: </span>{release}</h4>
      </div>
    </div>
  )
}

export default React.memo(FilmsItem)
