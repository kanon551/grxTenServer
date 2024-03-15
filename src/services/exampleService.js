const nodeProjectRepo = require('../config/dbConnection');
const logger = require('../utils/logger');
const {ExceptionResolver} = require('../middleware/ExceptionResolver');
const { SAVE_USER_SOLAR_DETAILS, CREATE_TABLE} = require('../queries/exampleQueries');
const { NotFound, BadRequestException, DataConstraintViolation } = require('../utils/exceptions');


const solarRoofTopEndAnalysis = async(averageElectricityBill, rooftopArea, phoneNumber) => {
    try{

        logger.info(`solarRoofTopEndAnalysis -> ${averageElectricityBill}, ${rooftopArea}, ${phoneNumber}`);
        const panelCapacity = 500; // in watts
        const panelSize = 2 * 1; // in square meters
        const capitalPerKW = 60000; // in INR

        const numberOfPanels = Math.ceil(averageElectricityBill / panelCapacity); // Conversion from watts to kilowatts
        logger.info(`Number of panels: ${numberOfPanels}`);

        const requiredRooftopArea = numberOfPanels * panelSize;
        logger.info(`Required rooftop area: ${requiredRooftopArea}`);
        
        if (requiredRooftopArea > rooftopArea) {
            throw new BadRequestException('Insufficient rooftop area for the calculated number of panels. Please provide a larger rooftop area.');
        }

        const installationCostPerPanel = 2000;
        const capitalNeeded = numberOfPanels * (capitalPerKW + installationCostPerPanel);
        logger.info(`Capital needed: ${capitalNeeded}`);


        const annualSavings = averageElectricityBill * 12;
        logger.info(`Annual savings: ${annualSavings}`);

        const maintenanceCostsPerYear = 5000;
        const breakevenYears = Math.ceil(capitalNeeded / (annualSavings - maintenanceCostsPerYear));
        logger.info(`Breakeven years: ${breakevenYears}`);

        const netAnnualSavings = annualSavings - maintenanceCostsPerYear;
        logger.info(`Net annual savings: ${netAnnualSavings}`);
        const next25YearsEarnings = netAnnualSavings * 25;
        logger.info(`Next 25 years earnings: ${next25YearsEarnings}`);

        await saveUserDetailsToDatabase(phoneNumber, averageElectricityBill, rooftopArea, numberOfPanels, requiredRooftopArea, capitalNeeded, breakevenYears, next25YearsEarnings);

        return {
            numberOfPanels,
            requiredRooftopArea,
            capitalNeeded,
            breakevenYears,
            next25YearsEarnings
        };

    }
    catch(error){
        logger.error(`solarRoofTopEndAnalysis -> ${error.message}`)
        ExceptionResolver(error, null);
    }
}


const saveUserDetailsToDatabase = async (phoneNumber, averageElectricityBill, rooftopArea, numberOfPanels, requiredRooftopArea, capitalNeeded, breakevenYears, next25YearsEarnings) => {
    try {

        const values = [phoneNumber, averageElectricityBill, rooftopArea, numberOfPanels, requiredRooftopArea, capitalNeeded, breakevenYears, next25YearsEarnings];


        const result = await nodeProjectRepo.pool.query(SAVE_USER_SOLAR_DETAILS, values);


        if (result.rowCount === 0) {
            throw new DataConstraintViolation('Failed to save user details to database.');
        }
    } catch (error) {
        logger.error(`saveUserDetailsToDatabase -> ${error.message}`);
        ExceptionResolver(error, null);
    }
}

const userDetailsTable = async() =>{
    try{
        const result = await nodeProjectRepo.pool.query(CREATE_TABLE);
        return "User Details Table created successfully";
    }
    catch(error){
        logger.error(`userDetailsTable -> ${error.message}`);
        ExceptionResolver(error, null);
    }
}

module.exports = {solarRoofTopEndAnalysis, userDetailsTable};