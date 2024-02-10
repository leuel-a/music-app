import { Express, Request, Response } from 'express';

import { createUserHandler } from './controllers/user.controller';
import validateResource from './middlewares/validateResource';
import { createUserSchema } from './schemas/user.schema';
import {
  createUserSessionHandler,
  deleteUserSessionHandler,
  getUserSessionsHandler,
} from './controllers/session.controller';
import { createSessionSchema } from './schemas/session.schema';
import requireUser from './middlewares/requireUser';
import { createMusicSchema } from './schemas/music.schema';
import { createMusicHandler } from './controllers/music.controller';

function routes(app: Express) {
  app.get('/status', (req: Request, res: Response) => res.sendStatus(200));

  // User Routes
  app.post('/api/users', validateResource(createUserSchema), createUserHandler);
  app.post('/api/sessions', validateResource(createSessionSchema), createUserSessionHandler);
  app.get('/api/sessions', requireUser, getUserSessionsHandler);
  app.delete('/api/sessions', requireUser, deleteUserSessionHandler);

  // Music Routes
  app.post('/api/musics', [requireUser, validateResource(createMusicSchema)], createMusicHandler);
}

export default routes;