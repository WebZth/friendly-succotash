import Bull, { Queue } from 'bull';
import conf from '@src/config';
import { emailProcess } from '@src/jobs';

const emailQueue: Queue = new Bull('email', {
	redis: {
		port: Number(conf.REDIS_PORT),
		host: conf.HOST,
	},
});

emailQueue.process(emailProcess);

const sendNewEmail = (data: any) => {
	emailQueue.add(data, {});
};

export default { sendNewEmail };
