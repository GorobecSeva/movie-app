import React from 'react';
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll';

function Header({movieGenres, handleClick, tvshowGenres, handleTvShowGenreClick, onChangeInput, onInputSubmitHandler, searchValue}) {
  const ScrollLink = Scroll.Link;
  
  const onInputChangeHandler = (e) => {
    onChangeInput(e)
  }
  const onSubmitInput = (e) => {
    e.preventDefault()
    onInputSubmitHandler()
  }
  return (
    <div className="header">
      <div className="header__list">
        <ul>
          <li className="header__list-item">
            <ScrollLink 
              to="films"
              smooth={true}
              duration={1000}
              activeClass="activeItem"
              spy={true}
            >
              Фильмы
            </ScrollLink>
            <ul className="backdrop">
            <div className="arrow-up"></div>
              {
                movieGenres.map((genre) => (
                  <li onClick={() => handleClick(genre.id)} key={genre.name}><Link to={`/${genre.name}`}>{genre.name}</Link></li>
                ))
              }
            </ul>
          </li>
          <li className="header__list-item">
            <ScrollLink 
              to="tvshows"
              smooth={true}
              duration={1000}
              activeClass="activeItem"
              spy={true}
            >
              ТВ шоу
            </ScrollLink>
            <ul className="backdrop">
            <div className="arrow-up"></div>
              {
                tvshowGenres.map((genre) => (
                  <li onClick={() => handleTvShowGenreClick(genre.id)} key={genre.name}><Link to={`/${genre.name}`}>{genre.name}</Link></li>
                ))
              }
            </ul>
          </li>
        </ul>
      </div>
      <div className="header__search">
        <form>
          <input value={searchValue} onChange={onInputChangeHandler} type="search"/>
          <button disabled={searchValue === '' || searchValue === null || searchValue === ' '} onClick={onSubmitInput} className="fa fa-search"></button>
        </form>
      </div>
    </div>
  );
}
export default Header

