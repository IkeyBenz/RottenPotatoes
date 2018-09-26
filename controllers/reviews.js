const Review = require('../models/review');

module.exports = function(app) {

    app.get('/movies/:movieId/reviews/new', (req, res) => {
        res.render('reviews-new', { movieId: req.params.movieId });
    });

    app.post('/movies/:movieId/reviews', (req, res) => {
        Review.create(req.body)
        .then(review => {
            res.redirect(`/movies/:movieId/reviews/${review._id}`);
        }).catch(console.error);
    });

    app.get('/movies/:movieId/reviews/:id', (req, res) => {
        Review.findById(req.params.id)
        .then(review => {
            res.render('reviews-show', { review: review });
        }).catch(console.error);
    });

    app.get('/movies/:movieId/reviews/:id/edit', (req, res) => {
        Review.findById(req.params.id)
        .then(review => {
            res.render('reviews-edit', { review: review });
        }).catch(console.error);
    });

    app.put('/movies/:movieId/reviews/:id', (req, res) => {
        Review.findOneAndUpdate(req.params.id, req.body)
        .then(review => {
            res.redirect(`/movies/${review.movieId}/`);
        }).catch(console.error);
    });

    app.delete('/movies/:movieId/reviews/:id', (req, res) => {
        Review.findByIdAndRemove(req.params.id)
        .then(() => {
            res.redirect(`/movies/${req.params.movieId}/`);
        }).catch(console.error);
    });

}