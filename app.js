
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , operate = require('./routes/operate')
  , graph = require('./routes/graph')
  , report = require('./routes/reports')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());


app.use(express.cookieParser());
app.use(express.session({ secret: 'xDDFsdfddsdfSDdbg', cookie: { maxAge: null }}));	
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req, res){
  res.render('login');
});
app.get('/index', function(req, res){
	  res.render('Dashboard');
});

app.get('/signin', operate.signin);


app.get('/aa', function(req, res){
	  res.render('test');
});
app.get('/test', graph.getPath);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
