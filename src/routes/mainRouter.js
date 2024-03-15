const express = require('express');
const exampleRouter = require('./exampleRouter');

const mainRouter = express.Router();

    mainRouter.use("/grxTen", exampleRouter);

module.exports = mainRouter