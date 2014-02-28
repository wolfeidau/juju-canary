'use strict';

module.exports = function (app) {

    app.get('/', function home(req, res) {
        res.render('index', { title: 'Express' });
    });

};
