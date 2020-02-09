var express = require('express');
var app = express();

// Setting for app here
// Set Public Folder
app.use(express.static(__dirname + '/public'));

// Define your route here
app.get('/', function(req, res){
	res.render('index');
});
// Set Server Port & Start Server
app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function(){
	console.log('Server is listening at port ' + app.get('port'));
});