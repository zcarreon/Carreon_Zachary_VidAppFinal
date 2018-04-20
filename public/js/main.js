var myApp = {
  // some code chat wouldn't necessarily go inside a viewmodel here
  movieGenres(data, genres) {
    genres.forEach((genre, index) => myApp.vm.genres.push({name : genre, movies : data.filter(movie => movie.genre_name === genre) }));
  },
  vm : new Vue({
    el : "#app",

    data : {
      message : "Welcome to Vue! and my Netlflix rip-off!",
      genres : []
    },

    methods : {
      //Nothing here yet
    },

    delimiters: ["${","}"],
  })
}
myApp.movieGenres(appData.movies, ["Action", "Adventure", "Comedy", "Drama", "Historical", "Musical", "Science Fiction", "War", "Family", "Fantasy", "Romance", "Sport"]);
