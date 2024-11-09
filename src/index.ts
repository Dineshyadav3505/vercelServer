import express, { Express } from 'express';
import routes from './routes';

const app: Express = express();
const port: number = 3000;

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});