import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
	res.send({ data: null, success: true, message: 'this endpoint works' });
});

export default app;
