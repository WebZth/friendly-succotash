import express, { Application, Request, Response } from 'express';
import { emailQueue } from './queues';

const app: Application = express();

app.use(express.json());

app.post('/send-email', async (req: Request, res: Response) => {
	await emailQueue.sendNewEmail(req.body);
	res.send({ data: null, success: true, message: 'Email sent' });
});
app.get('/', (req: Request, res: Response) => {
	res.send({ data: null, success: true, message: 'test endpoint' });
});

export default app;
