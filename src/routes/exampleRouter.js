const express = require('express');
const multer = require('multer');
const {  analyzeSolarTop, createTable } = require('../controllers/exampleController');
const upload = multer();


const exampleRouter = express.Router();

    exampleRouter.route("/calculateSolarInstallation").post(analyzeSolarTop);
    exampleRouter.route("/createUserDetailsTable").get(createTable);

module.exports = exampleRouter;