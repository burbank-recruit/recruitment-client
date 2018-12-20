module.exports = (err, req, res, next) => {
    console.log('error', err);
    return res.render('errors/gone-wrong');
};
