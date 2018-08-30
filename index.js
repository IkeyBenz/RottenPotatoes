let express = require('express');
let exphbs = require('express-handlebars');
let app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.get('/', (req, res) => {
    res.render('home', {msg: "Hello World!"});
});

app.listen(5000, console.log("Running Rotten Potatoes on port 5000!"));