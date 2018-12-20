const nunjucks = require('nunjucks');
const path = require('path');

module.exports = (app) => {
    app.set('view engine', 'njk');
    let nunjucksEnv = nunjucks.configure(path.join(__dirname, '../../views/'), {
        autoescape: true,
        express: app,
        noCache: true,
        watch: true
    });
    return app;
};
