import { config } from 'dotenv-safe';
import { IConfig } from '@src/interfaces/index';

config();

export default {
	ENV: process.env.NODE_ENV || 'development',
	HOST: process.env.HOST || 'localhost',
	PORT: process.env.PORT || 1234,
	API_VERSION: process.env.API_VERSION || 'current_api_version',
	REDIS_PORT: process.env.REDIS_PORT || 'redis_connection_port',
} as IConfig;
