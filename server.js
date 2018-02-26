
var path = require('path');
var express = require('express');

var app = express();

var server = app.listen(app.get('port'), function () {
    console.log('listening on port ', server.address().port);
});

app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 9000);

