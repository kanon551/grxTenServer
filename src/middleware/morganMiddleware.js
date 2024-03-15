// // // To log the "URL" with "METHOD NAME" "STATUS CODE" and "TIME"
const morgan = require('morgan');
const logger = require('../utils/logger');



const stream = {
  write: (message) => logger.http(message),
};


const morganMiddleware = morgan(
  ":method :url :status :res[content-length] - :response-time ms",
  { stream, skip: (req) => req.url === '/metrics' }
);

module.exports = morganMiddleware;