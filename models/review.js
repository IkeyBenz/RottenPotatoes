let mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rotten-potatoes', { useNewUrlParser: true });

module.exports = mongoose.model('Review', {
    title: { type: String, required: true }, 
    movieTitle: { type: String, required: true }, 
    description: { type: String, required: true },
    movieId: { type: String, required: true }
});