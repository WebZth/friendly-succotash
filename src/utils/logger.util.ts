import { createLogger, transports, format, Logger } from 'winston';

const logger: Logger = createLogger({
	format: format.combine(format.colorize(), format.simple()),
	transports: [new transports.Console()],
});

export default logger;
