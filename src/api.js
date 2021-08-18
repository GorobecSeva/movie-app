const baseUrl = 'https://api.themoviedb.org/3/'

const key = 'fb57764fbd839221f4c55b5b3764a1fb'

export const moviesUrl = `${baseUrl}discover/movie?api_key=${key}&language=ru-RU&sort_by=popularity.desc`

export const movieGenres = `${baseUrl}genre/movie/list?api_key=${key}&language=ru-RU`

export const tvshowsUrl = `${baseUrl}discover/tv?api_key=${key}&language=ru-RU&sort_by=popularity.desc&timezone=America%2FNew_York`

export const tvshowsGenresUrl = `${baseUrl}genre/tv/list?api_key=${key}&language=ru-RU`

export const changeableGenre = (id, pages) => `${baseUrl}discover/movie?api_key=${key}&language=ru-RU&page=${pages}&with_genres=${id}`

export const changeableTvGenre = (id, pages) => `${baseUrl}discover/tv?api_key=${key}&language=ru-RU&page=${pages}&timezone=America%2FNew_York&with_genres=${id}`

export const search = (query) => `${baseUrl}search/multi?api_key=${key}&language=ru-RU&query=${query}`


// https://api.themoviedb.org/3/search/multi?api_key=fb57764fbd839221f4c55b5b3764a1fb&language=ru-RU&query=Mortal