const express = require("express");
const appRouter = express.Router();
const layoutCustomMiddleware = require('../../middlewares/layoutMiddleware');

/**
 * Routers
 */
const homeRoute = require('./../pages/home');

appRouter.use(layoutCustomMiddleware());
appRouter.use('/', homeRoute);

module.exports = appRouter;
    