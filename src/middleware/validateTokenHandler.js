const jwt = require("jsonwebtoken");
const { Unauthorized, ForbiddenException, NetworkAuthenticationRequired, RequestTimeout } = require("../utils/exceptions");
const nodeProjectRepo = require('../config/dbConnection');
const logger = require('../utils/logger');



const validateToken = async(req, res, next) => {
    try {
      const token = req.header('Authorization');
      if (!token) {
          throw new NetworkAuthenticationRequired("Token Authorization Required.");
      }
    
      let splitToken = token.split(" ")[1];
      if (splitToken === undefined) {
          throw new Unauthorized("Access denied. Token missing");
      }

      req.token = splitToken;
     
      sessionId = 123;
      result = 123;
      if (sessionId === result) {
        next();
      } 
      else {
        throw new RequestTimeout(`Session Expired for login ${req.phone_number} Please Login Again`);
      }
    }
    catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            throw new RequestTimeout(`Token expired for ${req.phone_number}`);
          } else if (error instanceof jwt.JsonWebTokenError) {
            throw new ForbiddenException(`Invalid token for ${req.phone_number}`);
          } else if (error instanceof jwt.NotBeforeError) {
            throw new ForbiddenException(`Token not yet active for ${req.phone_number}`);
          } else {
            throw new ForbiddenException(`Failed to authenticate token for ${req.phone_number}`);
          }
    }
  };
  const asyncValidateToken = async(req, res, next) => {
    try{
      await validateToken(req, res, next);
    }
    catch(error){
      return next(error);
    }
  };
  
  module.exports = asyncValidateToken;