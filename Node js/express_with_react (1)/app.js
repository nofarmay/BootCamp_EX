import express from 'express';
import cors from 'cors';
import { testRoute } from './routes/testing.router.js';

const app = express();
const port = 8000;

app.use(cors());
app.use('/api', testRoute);

app.listen(port, () => {
  console.log('listen port' + port);
});
