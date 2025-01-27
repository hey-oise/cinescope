const APILINK = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f584fe697e29a069124ef2d7764ea510&pages=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?api_key=f584fe697e29a069124ef2d7764ea510&query=";


const main = document.getElementById("section");
const form = document.getElementById("form");
const query = document.getElementById("query");


function returnMovies