const { InternalServerError, ApplicationException } = require("../utils/exceptions");
const logger = require("../utils/logger");


// This Generic Component differentiates between
// custom thrown errors and system generated error (including JavaScript runtime errors, system-level errors, and errors from third-party libraries)
const ExceptionResolver = (err, personalMessage) => {
  if (err instanceof ApplicationException) {
      let message = personalMessage === null ? err.message : personalMessage;
      throw new err.constructor(message);
    } 
    else {
      let message = personalMessage === null ? "We encountered an issue while processing your request. Please try again." : personalMessage;
      throw new InternalServerError(message);
    }
}


module.exports = {
    ExceptionResolver
};