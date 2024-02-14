import express from 'express';
import config from 'config';

import routes from './routes';
import logger from './utils/logger';
import connect from './utils/connect';
import deserializeUser from './middlewares/deserializeUser';

const app = express();
const port = config.get<number>('port');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());
app.use(deserializeUser);

app.listen(port, async () => {
  logger.info(`App is running on http://localhost:${port}`);

  await connect();
  routes(app);
});
