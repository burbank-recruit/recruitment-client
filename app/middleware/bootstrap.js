const helmet = require('helmet');
const path = require('path');
const favicon = require('serve-favicon');
const requireDir = require('require-dir');

const globals = requireDir('./globals');
const routes = require('../routes/routes');


module.exports = (app) => {
    app.use(helmet());
    app.use(globals.httpsRedirect);
    app.set('trust proxy', 1);
    globals.serveFavicon(app);
    globals.serveStatic(app);
    globals.nunjucks(app);
    globals.cookieParser(app);
    globals.bodyParser(app);
    routes(app);
    app.use(globals.errorHandler);
    return app;
};
