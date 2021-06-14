"use strict"

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?")

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genesrs: [],
  private: false,
};

const a = prompt("Один из просмотренных фильмов?");
const b = prompt("На сколько его оцените?");
const c = prompt("Один из просмотренных фильмов");
const d = prompt("На сколько его оцените");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB.movies);