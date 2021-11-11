export default interface IConfig {
	ENV: string;
	PORT: string | number;
	HOST: string;
	API_VERSION: string;
	REDIS_PORT: string | number;
}
