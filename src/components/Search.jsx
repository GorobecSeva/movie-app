import React from 'react'
import SearchItem from './SearchItem'

function Search({searchList, onResetButton}) {
  const handleResetButton = () => {
    onResetButton()
  }
  return (
    <>
      {
        searchList.length ? 
        <div className="search">
          <div className="container">
            <h2>Вы искали</h2>
            {
              searchList.map((item) => (
                <SearchItem 
                  key={item.id} 
                  id={item.id} 
                  backdrop_path={item.backdrop_path} 
                  poster_path={item.poster_path}
                  title={item.title}
                  name={item.name}
                  vote_average={item.vote_average}
                  release_date={item.release_date}
                  first_air_date={item.first_air_date}
                  overview={item.overview}
                />
              ))
            }
            <div className="reset-search">
              <button onClick={handleResetButton} className="btn">Очистить результаты поиска</button>
            </div>
          </div>
        </div>
        : ''
      }
    </>
  )
}

export default Search
