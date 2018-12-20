module.exports = (req, res, next) => {
    res.cookie('acookie', JSON.stringify(req.body), {
        maxAge: 600000,
        httpOnly: true,
        signed: true,
        secure: true
    });
    return next();
};
