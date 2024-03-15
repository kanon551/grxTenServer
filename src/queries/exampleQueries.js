const dotenv = require('dotenv');

const SAVE_USER_SOLAR_DETAILS = ` INSERT INTO user_details (phone_number, average_electricity_bill, rooftop_area, number_of_panels, required_rooftop_area, capital_needed, breakeven_years, next_25_years_earnings)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;

const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS user_details
(
    id SERIAL PRIMARY KEY,
    phone_number VARCHAR(20) NOT NULL,
    average_electricity_bill NUMERIC NOT NULL,
    rooftop_area NUMERIC NOT NULL,
    number_of_panels INTEGER NOT NULL,
    required_rooftop_area NUMERIC NOT NULL,
    capital_needed NUMERIC NOT NULL,
    breakeven_years INTEGER NOT NULL,
    next_25_years_earnings NUMERIC NOT NULL
)`;

module.exports={
    SAVE_USER_SOLAR_DETAILS,
    CREATE_TABLE
}