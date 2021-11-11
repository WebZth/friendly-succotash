import { Logger } from 'winston';
import app from './app';
import conf from './config';
import { logger } from './utils';

try {
	app.listen(
		Number(conf.PORT),
		conf.HOST,
		(): Logger => logger.info(`Server running @ http://${conf.HOST}:${conf.PORT}`)
	);
} catch (error: any) {
	logger.error(`${error.name}::${error.message}`);
}
