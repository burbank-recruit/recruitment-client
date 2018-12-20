module.exports = (req, res, next) => {
    try {
        res.locals.cookie = JSON.parse(req.signedCookies.acookie);
    } catch(e) {
        console.log(e);
    }
    return next();
};
