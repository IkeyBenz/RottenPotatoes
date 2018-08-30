let express = require('express');
let exphbs = require('express-handlebars');
let app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    let mockReviews = [
        {title: "Great show", movieTitle: "Black Panther"},
        {title: "Next Review", movieTitle: "Orphan"}
    ]
    res.render('reviews-index', {reviews: mockReviews});
});
app.get('/reviews', (req, res) => {
    
});
app.get('/reviews/new', (req, res) => {
    // See new review form
});
app.post('/reviews', (req, res) => {
    // Creates a new review
});
app.get('/reviews/:id', (req, res) => {
    // Shows one review
});
app.get('/reviews/:id/edit', (req, res) => {
    // Edits a review
});
app.put('/reviews/:id', (req, res) => {
    // Updates a review
});
app.delete('/reviews/:id', (req, res) => {
    // Deletes a review
})

app.listen(5000, console.log("Running Rotten Potatoes on port 5000!"));