const log4js = require('log4js');
log4js.configure({
    appenders: { wstun: { type: "file", filename: "wstun.log" } },
    categories: { default: { appenders: ["wstun"], level: "error" } },
});

const logger = log4js.getLogger('wstun');
logger.level = "debug";


module.exports = {
    logger,
}
