"use strict"

let numberOfFilms

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?")

  while (numberOfFilms == '' || numberOfFilms == null || numberOfFilms == isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?")
  }
}

// start()

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genesrs: [],
  private: false,
};


function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из просмотренных фильмов?");
    const b = prompt("На сколько его оцените?");

    if (a !== '' && b !== '' && a !== null && b !== null && 50 > a.length) {
      personalMovieDB.movies[a] = b;
    } else {
      i--
    }
  };
}

// rememberMyFilms();


function detectPersonaLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    console.log("Да вы киноман");
  } else {
    console.log("Произошла ошибка");
  };
}

// detectPersonaLevel();

function showMyBD(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

// showMyBD(personalMovieDB.private)

function writeYourGeners() {
  for (let i = 1; i <= 3; i++) {
    let geners = prompt(`Ваш любимый жанр под номером ${i}`)
    personalMovieDB.genesrs[i - 1] = geners;
  }
}

// writeYourGeners()