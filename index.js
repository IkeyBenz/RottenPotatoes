let express = require('express');
let exphbs = require('express-handlebars');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let app = express();
let reviewController = require('./controllers/reviews');

app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

reviewController(app);

app.listen(5000, console.log("Running Rotten Potatoes on port 5000!"));