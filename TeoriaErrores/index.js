const winston = require('winston');

const logger = winston.createLogger({
  level: 'debug', // Cambio de niveles, previamente info
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //

    // new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }), 
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

// Se nos va a crear dos archivos logs, combined.log y error.log, que guardaran todos los errores y mensajes de consola, debug no aparece ya que es otro nivel

// Los niveles estan definidos en la documentacion de winston

logger.info("Hola, esto es un mensaje informativo");
logger.debug("Esto es un mensaje de debug")
logger.warn("Esto es un mensaje de advertencia");
logger.error("Esto es un error");

// npm start

// Instalacion de Winston, una libreria que nos va a permitir gestionar los logs de la mejor manera posible

// npm install winston

// Esto creara una carpeta que se llama node_modules