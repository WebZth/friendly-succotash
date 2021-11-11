import http from 'http';
import { Logger } from 'winston';
import app from './app';
import conf from './config';
import { logger } from './utils';

try {
	http
		.createServer(app)
		.listen(
			Number(conf.PORT),
			conf.HOST,
			(): Logger => logger.info(`🚀 server::running @ http://${conf.HOST}:${conf.PORT}`)
		);
} catch (error: any) {
	logger.error(`🔺 ${error.name}::${error.message}`);
}
