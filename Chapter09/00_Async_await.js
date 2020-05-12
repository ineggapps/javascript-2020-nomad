function getMovie() {
  fetch("http://yts.am/api/v2/list_movies.json")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((json) => console.log(json))
    .catch((e) => console.log(e));
}

async function getMovieAsync() {
  const response = await fetch("http://yts.am/api/v2/list_movies.json");
  const json = response.json();
  console.log(json);
}

console.log("getMovie 호출");
getMovie();

console.log("getMovieAsync 호출");
getMovieAsync();
