import Bull, { Queue } from 'bull';
import conf from '@src/config';

const emailQueue: Queue = new Bull('email', {
	redis: {
		port: Number(conf.REDIS_PORT),
		host: conf.HOST,
	},
});

const sendNewEmail = (data: any) => {
	emailQueue.add(data, {});
};

export default emailQueue;
