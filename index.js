let express = require('express');
let exphbs = require('express-handlebars');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

mongoose.connect('mongodb://localhost/rotten-potatoes', {useNewUrlParser: true});

const Review = mongoose.model('Review', {
    reviewTitle: String, 
    movieTitle: String, 
    movieDescription: String
});

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
    res.render('reviews-new');
});
app.post('/reviews', (req, res) => {
    Review.create(req.body)
    .then(review => {
        res.redirect(`/reviews/${review._id}`);
    }).catch(error => {
        console.log(error.message);
    });
});
app.get('/reviews/:id', (req, res) => {
    Review.findById(req.params.id).then(rvw => {
        res.render('reviews-show', {review: rvw});
    }).catch(error => {
        console.log(error);
    });
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