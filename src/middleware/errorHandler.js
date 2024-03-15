/*
 * Error Handler
 */

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, _next) => {
    const httpStatusCode = err.code || 500;
    const output = {
        status: false,
        statusMessage: err.message,
        statusCode: err.code || 500,
    };
    return res.status(httpStatusCode).json(output);
};
/*
 * @description Catch 404 error if no route found
 */
const handle404 = (req, res) =>
    res.status(404).json({
        status: false,
        statusMessage: 'Resource Not Found',
        statusCode: 404,
    });

module.exports = {
    errorHandler,
    handle404,
};