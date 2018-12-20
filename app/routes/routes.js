module.exports = (app) => {
    app.get('/', (req, res) => res.render('index'));

    app.post('/', [
        (req, res, next) => {
            console.log('here');
            return res.redirect('/requester/form');
        }
    ]);

    app.get('/requester/form', (req, res) => res.render('requester/form'));


};
