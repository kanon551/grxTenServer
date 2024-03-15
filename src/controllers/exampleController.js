const { exampleServiceFunction, solarRoofTopEndAnalysis, userDetailsTable } = require("../services/exampleService");
const { BadRequestException } = require("../utils/exceptions");
const logger = require("../utils/logger");
const responseUtility = require('../utils/responseUtility');


//@desc -- A Roof top solar panel calculation api
//@route POST /api/grxTen/calculateSolarInstallation
//@access public
const analyzeSolarTop = async(req, res, next) => {
    try{

        logger.info("////////////////////////////////////////////")
        logger.info("Analyze Solar Top api called");
        logger.info(`analyzeSolarTop -> ${ JSON.stringify(req.body) }`);
        const { averageElectricityBill, roofTopArea, phoneNumber } = req.body;



        if (!averageElectricityBill || !roofTopArea || !phoneNumber) {
            throw new BadRequestException('All input fields are required.');
        }

        else if (averageElectricityBill <= 0 || averageElectricityBill > 1000000) {
            throw new BadRequestException('Average electricity bill must be a positive number less than or equal to 1,000,000.');
        }

        else if (roofTopArea <= 0 || roofTopArea > 10000) {
            throw new BadRequestException('Rooftop area must be a positive number less than or equal to 10,000.');
        }
         // Ensure phoneNumber is a string
         else if (typeof phoneNumber !== 'string') {
            throw new BadRequestException('Invalid phone number format. Phone number must be a string.');
        }

        const phoneNumberRegex = /^\d{10}$/;
        if (!phoneNumber.match(phoneNumberRegex)) {
            throw new BadRequestException('Invalid phone number format. Phone number must be a 10-digit numeric value.');
        }

        const response = await solarRoofTopEndAnalysis(averageElectricityBill, roofTopArea, phoneNumber);

        logger.info("/////////////THE END OF api/grxTen/calculateSolarInstallation ////////////")
        return res.status(200).json(responseUtility.build('SUCCESS', response));
    }
    catch(error){
        return next(error);
    }
}

//@desc -- A User details table creation
//@route POST /api/grxTen/createUserDetailsTable
//@access public
const createTable = async(req,res,next) => {

    try{
        const response = await userDetailsTable();
        return res.status(200).json(responseUtility.build('SUCCESS', response));
    }
    catch(error){
        return next(error);
    }
}

module.exports = {analyzeSolarTop, createTable};

