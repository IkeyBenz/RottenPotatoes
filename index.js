let express = require('express');
let exphbs = require('express-handlebars');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let app = express();
let reviewController = require('./controllers/reviews');
let movieController = require('./controllers/movies');
let port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

reviewController(app);
movieController(app);

app.listen(port, console.log(`Running Rotten Potatoes on port ${port}!`));