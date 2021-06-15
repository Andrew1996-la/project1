"use strict"

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?")

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genesrs: [],
  private: false,
};


for (let i = 0; i < 2; i++) {
  const a = prompt("Один из просмотренных фильмов?");
  const b = prompt("На сколько его оцените?");

  if (a !== '' && b !== '' && a !== null && b !== null && 50 > a.length) {
    personalMovieDB.movies[a] = b;
  } else {
    i--
  }
};


if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
  console.log("Да вы киноман");
} else {
  console.log("Произошла ошибка");
};




console.log(personalMovieDB.movies);