const rp = require('request-promise');

module.exports = (req, res, next) => {
    rp.post('http://burbank-recruitment-api.herokuapp.com/intiateRequestApproval', {
        json: true,
        body: req.body
    })
        .then((response) => {
            console.log(response);
            return next();
        })
        .catch((error) => {
            console.log(error);
            return next();
        });
};
