const express = require('express');
const routes = express.Router();

routes.get('/ping', function (req, res) {
    return res.send('pong');
});

module.exports = routes;