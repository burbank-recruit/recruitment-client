require('dotenv').config();

const fs = require('fs');
const https = require('https');
const express = require('express');
const bootstrap = require('./app/middleware/bootstrap');

const PORT = process.env.PORT || 4500;
const app = express();

bootstrap(app);

if(process.env.NODE_ENV === 'local') {
    const options = {
        key: fs.readFileSync(process.env.KEY_FILE_PATH),
        cert: fs.readFileSync(process.env.CERT_FILE_PATH)
    };
    const server = https.createServer(options, app);
    server.listen(PORT, () => console.log(`Secure Recruitment client listening on port: ${PORT}`));
} else {
    app.listen(PORT, () => console.log(`Recruitment client listening on port: ${PORT}`));
}
