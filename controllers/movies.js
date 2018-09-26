const MovieDB = require('moviedb-promise');
const moviedb = new MovieDB('ed9b3835cfd2df105e43008936adbb7c');

module.exports = function (app) {

    app.get('/', (req, res) => {
        moviedb.miscNowPlayingMovies().then(response => {
            let editedMovies = []
            for (let movie of response.results) {
                movie.overview = movie.overview.slice(0, 100);
                editedMovies.push(movie);
            }
            res.render('movies-index', { movies: editedMovies });
        }).catch(console.error)
    });

    app.get('/movies/', (req, res) => {
        
    });

    app.get('/movies/:id', (req, res) => {
        moviedb.movieInfo({ id: req.params.id }).then(movie => {
            if (movie.video) {
                moviedb.movieVideo({ id: req.params.id }).then(videos => {
                    movie.trailer_youtube_id = videos.results[0].key;
                    res.render('movies-show', { movie: movie });
                });
            } else {
                res.render('movies-show', { movie: movie });
            }
        })
    });

}