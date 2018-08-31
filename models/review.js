let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rotten-potatoes', {useNewUrlParser: true});

module.exports = mongoose.model('Review', {
    reviewTitle: String, 
    movieTitle: String, 
    movieDescription: String
});