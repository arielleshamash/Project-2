var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.set('port', (process.env.PORT || 3000));

app.get('/', function (req, res) {
    res.render('home', {
       
    });
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


app.listen(app.get('port'), function () {
    console.log('Server started on port ' + app.get('port'))
});
