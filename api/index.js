const express = require("express");
const apiRouter = express.Router();
const moviesRoutes = require('./movies');

apiRouter.use('/movies', moviesRoutes);
apiRouter.use('/', (req, res) => {
    res.send('Welcome to the api');
});

module.exports = apiRouter;