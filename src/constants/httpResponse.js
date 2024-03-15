const httpResponse = {
    APP_MESSAGES: {
        SUCCESS: {
            message: 'Success',
            statusCode: 200,
        },
        ERROR_VALIDATION: {
            message: 'Validation Error',
            statusCode: 400,
        },
        ERROR_MAX_LIMIT_EXCEEDED: {
            message: 'Exceeded Maximum Limit',
            statusCode: 400,
        },
        ERROR_UNAUTHORIZED: {
            message: 'Unauthorized Access',
            statusCode: 401,
        },
        ERROR_NO_DATA: {
            message: 'No Data Available',
            statusCode: 404,
        },
        ERROR_SERVER_ERROR: {
            message: 'Server Error',
            statusCode: 500,
        },
        ERROR_NOT_FOUND: {
            message: 'Resource Not Found',
            statusCode: 404,
        },
        ERROR_CONSTRAINT_VIOLATION: {
            message: 'Data Constraint Violation',
            statusCode: 400,
        },
        ERROR_NOT_ACCEPTABLE: {
            message: 'Not Acceptable',
            statusCode: 406,
        },
        ERROR_BAD_REQUEST: {
            message: 'Bad Request',
            statusCode: 400,
        },
        ERROR_FORBIDDEN: {
            message: 'Access Denied',
            statusCode: 403,
        },
        ERROR_INVALID_CREDENTIALS: {
            message: 'Invalid Credentials',
            statusCode: 401,
        },
        ERROR_PAYMENT_REQUIRED: {
            message: 'Payment Required',
            statusCode: 402,
        },
        ERROR_REQUEST_TIMEOUT: {
            message: 'Request Timeout',
            statusCode: 408,
        },
        ERROR_TOO_MANY_REQUESTS: {
            message: 'Too Many Requests',
            statusCode: 429,
        },
        ERROR_METHOD_NOT_ALLOWED: {
            message: 'Method Not Allowed',
            statusCode: 405,
        },
        ERROR_PROXY_AUTH_REQUIRED: {
            message: 'Proxy Authentication Required',
            statusCode: 407,
        },
        ERROR_CONFLICT: {
            message: 'Resource Conflict',
            statusCode: 409,
        },
        ERROR_GONE: {
            message: 'Resource Gone',
            statusCode: 410,
        },
        ERROR_LENGTH_REQUIRED: {
            message: 'Length Required',
            statusCode: 411,
        },
        ERROR_PRECONDITION_FAILED: {
            message: 'Precondition Failed',
            statusCode: 412,
        },
        ERROR_PAYLOAD_TOO_LARGE: {
            message: 'Payload Too Large',
            statusCode: 413,
        },
        ERROR_URI_TOO_LONG: {
            message: 'URI Too Long',
            statusCode: 414,
        },
        ERROR_UNSUPPORTED_MEDIA_TYPE: {
            message: 'Unsupported Media Type',
            statusCode: 415,
        },
        ERROR_RANGE_NOT_SATISFIABLE: {
            message: 'Range Not Satisfiable',
            statusCode: 416,
        },
        ERROR_EXPECTATION_FAILED: {
            message: 'Expectation Failed',
            statusCode: 417,
        },
        ERROR_IM_A_TEAPOT: {
            message: "I'm a Teapot",
            statusCode: 418,
        },
        ERROR_MISDIRECTED_REQUEST: {
            message: 'Misdirected Request',
            statusCode: 421,
        },
        ERROR_UNPROCESSABLE_ENTITY: {
            message: 'Unprocessable Entity',
            statusCode: 422,
        },
        ERROR_LOCKED: {
            message: 'Locked',
            statusCode: 423,
        },
        ERROR_FAILED_DEPENDENCY: {
            message: 'Failed Dependency',
            statusCode: 424,
        },
        ERROR_TOO_EARLY: {
            message: 'Too Early',
            statusCode: 425,
        },
        ERROR_UPGRADE_REQUIRED: {
            message: 'Upgrade Required',
            statusCode: 426,
        },
        ERROR_PRECONDITION_REQUIRED: {
            message: 'Precondition Required',
            statusCode: 428,
        },
        ERROR_REQUEST_HEADER_FIELDS_TOO_LARGE: {
            message: 'Request Header Fields Too Large',
            statusCode: 431,
        },
        ERROR_UNAVAILABLE_FOR_LEGAL_REASONS: {
            message: 'Unavailable For Legal Reasons',
            statusCode: 451,
        },
        ERROR_NOT_IMPLEMENTED: {
            message: 'Not Implemented',
            statusCode: 501,
        },
        ERROR_BAD_GATEWAY: {
            message: 'Bad Gateway',
            statusCode: 502,
        },
        ERROR_SERVICE_UNAVAILABLE: {
            message: 'Service Unavailable',
            statusCode: 503,
        },
        ERROR_GATEWAY_TIMEOUT: {
            message: 'Gateway Timeout',
            statusCode: 504,
        },
        ERROR_HTTP_VERSION_NOT_SUPPORTED: {
            message: 'HTTP Version Not Supported',
            statusCode: 505,
        },
        ERROR_VARIANT_ALSO_NEGOTIATES: {
            message: 'Variant Also Negotiates',
            statusCode: 506,
        },
        ERROR_INSUFFICIENT_STORAGE: {
            message: 'Insufficient Storage',
            statusCode: 507,
        },
        ERROR_LOOP_DETECTED: {
            message: 'Loop Detected',
            statusCode: 508,
        },
        ERROR_NOT_EXTENDED: {
            message: 'Not Extended',
            statusCode: 510,
        },
        ERROR_NETWORK_AUTH_REQUIRED: {
            message: 'Network Authentication Required',
            statusCode: 511,
        }
    },
};

module.exports = httpResponse;