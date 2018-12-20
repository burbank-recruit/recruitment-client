const downloadFile = require('../middleware/readFileFroms3');
const callApi = require('../middleware/callApi');
const uuid = require('uuid/v4');
const readCookie = require('../middleware/readCookie');
const sendCookie = require('../middleware/sendCookie');

module.exports = (app) => {
    app.get('/', (req, res) => res.render('index'));

    app.post('/', [
        (req, res, next) => {
            console.log(req.body);
            next();

        },
        (req, res, next) => {
            return res.redirect('/requester/index');
        }
    ]);

    app.get('/requester/index', (req, res) => res.render('requester/index'));
    app.get('/requester/rdt', [
        readCookie,
        (req, res) => res.render('requester/rdt')]);
    app.get('/requester/rrf', (req, res) => res.render('requester/rrf'));
    app.get('/requester/success', [
        (req, res, next) => {
            res.locals.uuid = uuid();
            return next();
        },
        (req, res) => res.render('requester/success')
    ]);

    app.get('/requester/approved', [
        (req, res, next) => {
            res.locals.uuid = uuid();
            return next();
        },
        (req, res) => res.render('requester/approved')
    ]);


    app.post('/requester/rrf', [
        sendCookie,
        callApi,
        (req, res) => res.redirect('/requester/success')
    ]);

    app.post('/requester/rdt', [
        callApi,
        (req, res) => res.redirect('/requester/success')
    ]);



};
