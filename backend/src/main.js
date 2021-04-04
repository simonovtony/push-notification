const path = require('path');
const http = require('http');
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const routers = require('./routers');
const services = require('./services');

const main = () => {
    const config = require('../config');

    const app = express();
    const server = http.createServer(app);

    services();

    app.use(express.static(path.resolve(__dirname, 'static')));
    app.use(bodyparser.urlencoded({ extended: false }));
    app.use(bodyparser.json());
    app.use(cors());
    
    app.use(routers.apiRouter);

    server.listen(
        config.port, 
        () => {
            console.log(`the server is running on http://localhost:${config.port}`)
        }
    );
}

module.exports = main;