const { createLogger, transports  } = require('winston');

module.exports = createLogger({
    transports: [
        new transports.File({
            maxsize: 512000,
            maxFiles: 5,
            filename: 'src/log/success.log'
        }),
        new transports.Console({
            level: 'debug'
        })
    ]
})