let express = require('express');
let exphbs = require('express-handlebars');
let mongoose = require('mongoose');
let app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

mongoose.connect('mongodb://localhost/rotten-potatoes', {useNewUrlParser: true});

const Review = mongoose.model('Review', {title: String});

app.get('/', (req, res) => {
    Review.find()
    .then(rvws => {
        res.render('reviews-index', {reviews: rvws});
    }).catch(error => {
        console.log(error);
    });
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