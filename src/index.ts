import express, { Request, Response } from 'express';

const app = express();

const PORT = 8000;

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Hello World',
  });
});

app.listen(PORT, () => {
  console.log('Listening at PORT', PORT);
});
