const favicon = require('serve-favicon');
const path = require('path');

module.exports = (app) => {
    app.use(favicon(path.join(__dirname, '../../assets/images', 'favicon.ico')));
    return app;
};
