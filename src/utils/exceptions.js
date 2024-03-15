const NodeException = require('node-exceptions');
const httpErrors = require('../constants/httpResponse');
const logger = require("../utils/logger")

class ApplicationException extends NodeException.LogicalException {
    constructor(errorKey = 'ERROR_SERVER_ERROR', message) {
        super();
        const error = httpErrors.APP_MESSAGES[errorKey];
        this.message = message || error.message;
        this.code = error.statusCode;
    }
}

class DataNotFoundException extends ApplicationException {
    constructor(message) {
        super('ERROR_NO_DATA', message);
    }
}

class ValidationFailed extends ApplicationException {
    constructor(message) {
        super('ERROR_VALIDATION', message);
    }
}

class Unauthorized extends ApplicationException {
    constructor(message) {
        super('ERROR_UNAUTHORIZED', message);
    }
}

class ResourceNotFound extends ApplicationException {
    constructor(message) {
        super('ERROR_NOT_FOUND', message);
    }
}

class DataConstraintViolation extends ApplicationException {
    constructor(message) {
        super('ERROR_CONSTRAINT_VIOLATION', message);
    }
}

class NotAcceptableException extends ApplicationException {
    constructor(message) {
        super('ERROR_NOT_ACCEPTABLE', message);
    }
}

class BadRequestException extends ApplicationException {
    constructor(message) {
        super('ERROR_BAD_REQUEST', message);
    }
}

class ForbiddenException extends ApplicationException {
    constructor(message) {
        super('ERROR_FORBIDDEN', message);
    }
}

class ConflictException extends ApplicationException {
    constructor(message) {
        super('ERROR_CONFLICT', message);
    }
}

class InvalidCredentials extends ApplicationException {
    constructor(message) {
        super('ERROR_INVALID_CREDENTIALS', message);
    }
}

class PaymentRequired extends ApplicationException {
    constructor(message) {
        super('ERROR_PAYMENT_REQUIRED', message);
    }
}

class NotFound extends ApplicationException {
    constructor(message) {
        super('ERROR_NOT_FOUND', message);
    }
}

class MethodNotAllowed extends ApplicationException {
    constructor(message) {
        super('ERROR_METHOD_NOT_ALLOWED', message);
    }
}

class NotAcceptable extends ApplicationException {
    constructor(message) {
        super('ERROR_NOT_ACCEPTABLE', message);
    }
}

class ProxyAuthenticationRequired extends ApplicationException {
    constructor(message) {
        super('ERROR_PROXY_AUTH_REQUIRED', message);
    }
}

class RequestTimeout extends ApplicationException {
    constructor(message) {
        super('ERROR_REQUEST_TIMEOUT', message);
    }
}

class Gone extends ApplicationException {
    constructor(message) {
        super('ERROR_GONE', message);
    }
}

class LengthRequired extends ApplicationException {
    constructor(message) {
        super('ERROR_LENGTH_REQUIRED', message);
    }
}

class PreconditionFailed extends ApplicationException {
    constructor(message) {
        super('ERROR_PRECONDITION_FAILED', message);
    }
}

class PayloadTooLarge extends ApplicationException {
    constructor(message) {
        super('ERROR_PAYLOAD_TOO_LARGE', message);
    }
}

class UriTooLong extends ApplicationException {
    constructor(message) {
        super('ERROR_URI_TOO_LONG', message);
    }
}

class UnsupportedMediaType extends ApplicationException {
    constructor(message) {
        super('ERROR_UNSUPPORTED_MEDIA_TYPE', message);
    }
}

class RangeNotSatisfiable extends ApplicationException {
    constructor(message) {
        super('ERROR_RANGE_NOT_SATISFIABLE', message);
    }
}

class ExpectationFailed extends ApplicationException {
    constructor(message) {
        super('ERROR_EXPECTATION_FAILED', message);
    }
}

class ImATeapot extends ApplicationException {
    constructor(message) {
        super('ERROR_IM_A_TEAPOT', message);
    }
}

class MisdirectedRequest extends ApplicationException {
    constructor(message) {
        super('ERROR_MISDIRECTED_REQUEST', message);
    }
}

class UnprocessableEntity extends ApplicationException {
    constructor(message) {
        super('ERROR_UNPROCESSABLE_ENTITY', message);
    }
}

class Locked extends ApplicationException {
    constructor(message) {
        super('ERROR_LOCKED', message);
    }
}

class FailedDependency extends ApplicationException {
    constructor(message) {
        super('ERROR_FAILED_DEPENDENCY', message);
    }
}

class TooEarly extends ApplicationException {
    constructor(message) {
        super('ERROR_TOO_EARLY', message);
    }
}

class UpgradeRequired extends ApplicationException {
    constructor(message) {
        super('ERROR_UPGRADE_REQUIRED', message);
    }
}

class PreconditionRequired extends ApplicationException {
    constructor(message) {
        super('ERROR_PRECONDITION_REQUIRED', message);
    }
}

class TooManyRequests extends ApplicationException {
    constructor(message) {
        super('ERROR_TOO_MANY_REQUESTS', message);
    }
}

class RequestHeaderFieldsTooLarge extends ApplicationException {
    constructor(message) {
        super('ERROR_REQUEST_HEADER_FIELDS_TOO_LARGE', message);
    }
}

class UnavailableForLegalReasons extends ApplicationException {
    constructor(message) {
        super('ERROR_UNAVAILABLE_FOR_LEGAL_REASONS', message);
    }
}

class InternalServerError extends ApplicationException {
    constructor(message) {
        super('ERROR_SERVER_ERROR', message);
    }
}

class NotImplemented extends ApplicationException {
    constructor(message) {
        super('ERROR_NOT_IMPLEMENTED', message);
    }
}

class BadGateway extends ApplicationException {
    constructor(message) {
        super('ERROR_BAD_GATEWAY', message);
    }
}

class ServiceUnavailable extends ApplicationException {
    constructor(message) {
        super('ERROR_SERVICE_UNAVAILABLE', message);
    }
}

class GatewayTimeout extends ApplicationException {
    constructor(message) {
        super('ERROR_GATEWAY_TIMEOUT', message);
    }
}

class HTTPVersionNotSupported extends ApplicationException {
    constructor(message) {
        super('ERROR_HTTP_VERSION_NOT_SUPPORTED', message);
    }
}

class VariantAlsoNegotiates extends ApplicationException {
    constructor(message) {
        super('ERROR_VARIANT_ALSO_NEGOTIATES', message);
    }
}

class InsufficientStorage extends ApplicationException {
    constructor(message) {
        super('ERROR_INSUFFICIENT_STORAGE', message);
    }
}

class LoopDetected extends ApplicationException {
    constructor(message) {
        super('ERROR_LOOP_DETECTED', message);
    }
}

class NotExtended extends ApplicationException {
    constructor(message) {
        super('ERROR_NOT_EXTENDED', message);
    }
}

class NetworkAuthenticationRequired extends ApplicationException {
    constructor(message) {
        super('ERROR_NETWORK_AUTH_REQUIRED', message);
    }
}

class MaxLimitExceededError extends ApplicationException {
    constructor(message) {
        super('ERROR_MAX_LIMIT_EXCEEDED', message);
    }
}

module.exports = {
    DataNotFoundException,
    ValidationFailed,
    Unauthorized,
    ResourceNotFound,
    DataConstraintViolation,
    NotAcceptableException,
    BadRequestException,
    ForbiddenException,
    ConflictException,
    InvalidCredentials,
    PaymentRequired,
    RequestTimeout,
    NotFound,
    MethodNotAllowed,
    NotAcceptable,
    ProxyAuthenticationRequired,
    Gone,
    LengthRequired,
    PreconditionFailed,
    PayloadTooLarge,
    UriTooLong,
    UnsupportedMediaType,
    RangeNotSatisfiable,
    ExpectationFailed,
    ImATeapot,
    MisdirectedRequest,
    UnprocessableEntity,
    Locked,
    FailedDependency,
    TooEarly,
    UpgradeRequired,
    PreconditionRequired,
    TooManyRequests,
    RequestHeaderFieldsTooLarge,
    UnavailableForLegalReasons,
    InternalServerError,
    NotImplemented,
    BadGateway,
    ServiceUnavailable,
    GatewayTimeout,
    HTTPVersionNotSupported,
    VariantAlsoNegotiates,
    InsufficientStorage,
    LoopDetected,
    NotExtended,
    NetworkAuthenticationRequired,
    MaxLimitExceededError,
    ApplicationException
};