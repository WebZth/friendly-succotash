import { Job } from 'bull';
import { logger } from '@src/utils';

const emailProcess = (job: Job) => {
	logger.info(job.data);
};

export default emailProcess;
