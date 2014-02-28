'use strict';
var http = require('http');
var app = require('./app');

app.configure(function(err, app){
  if(err) throw err;
  http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
  });
});
