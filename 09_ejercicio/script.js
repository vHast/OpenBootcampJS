
const winston = require('winston');

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});



const calculaPor10 = num => {
  if (typeof num === 'number') {
    return num * 10;
  }
  throw new Error("Existe un error en esta funcion");
}

try {
  logger.debug("Ejecucion correcta");
  const resultado = calculaPor10(20);
  logger.debug(resultado);
} catch(e) {
  logger.error(`El valor de e es de: ${e}`);
  logger.error("Error")
}