var express = require('express');
var app = express();
var colors = require('colors');
var prepath = __dirname + "/public";
var host = "127.0.0.1";
var port = 5000;

app.set('port', (process.env.PORT || port));
app.use(express.static(prepath));

app.get('/', function(request, response) {
	console.log("200".green + " requested page (/) granted.");
<<<<<<< HEAD
	// response.sendFile(prepath + "/html/index.html");
=======
>>>>>>> f1dc9735c7fc20d2d3d6a42fdab1811c2341f954
	response.sendFile(prepath + "/html/pages/dashboard.html");
})

app.listen(app.get('port'), function() {
    console.log("LISTENING".magenta + " on port " + app.get('port'));
});
