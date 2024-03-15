/*
        *    In package Json if we include  "start": "nodemon index.js", then logs will be updated each day 
             So now logs occur as per date in this path. 
             nodeTemplateLogs/server/${DATE}.log
 */
    const winston = require('winston');

    const { combine, timestamp, colorize, align, printf } = winston.format;

    const logLevels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6,
    };

    const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    verbose: 'cyan',
    debug: 'white',
    silly: 'gray',
    };

    winston.addColors(colors);

    const consoleFormat = combine(
    timestamp({ format: 'DD/MM/YYYY, hh:mm:ss.SSS A' }),
    colorize({ all: true }),
    align(),
    printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
    );

    const fileFormat = combine(
    timestamp({ format: 'DD/MM/YYYY, hh:mm:ss.SSS A' }),
    align(),
    printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
    );

    const consoleTransport = new winston.transports.Console({
    format: consoleFormat,
    });


    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const DATE = `${year}-${month}-${day}`;

    const fileTransport = new winston.transports.File({
    filename: `grx10serverLogs/server/${DATE}.log`,
    format: fileFormat,
    maxSize: '40m',
    maxFiles: '30d',
    // zippedArchive: true,
    });

    const logger = winston.createLogger({
    levels: logLevels,
    level: process.env.LOG_LEVEL || 'info' || 'error',
    transports: [consoleTransport, fileTransport], // Use separate transports for console and file
    });

    module.exports = logger;