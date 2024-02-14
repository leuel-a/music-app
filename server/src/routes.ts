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
import { createMusicSchema, getMusicSchema,deleteMusicSchema, updateMusicSchema } from './schemas/music.schema';
import {
  createMusicHandler, deleteMusicHandler, getAllMusicHandler,
  getMusicHandler, getSelfMusicHandler,
  updateMusicHandler,
} from './controllers/music.controller';
import { getAllMusic } from './services/music.service';

function routes(app: Express) {
  app.get('/status', (req: Request, res: Response) => res.sendStatus(200));

  // User Routes
  app.post('/api/users', validateResource(createUserSchema), createUserHandler);
  app.get('/api/users/musics', requireUser, getSelfMusicHandler);
  app.post('/api/sessions', validateResource(createSessionSchema), createUserSessionHandler);
  app.get('/api/sessions', requireUser, getUserSessionsHandler);
  app.delete('/api/sessions', requireUser, deleteUserSessionHandler);

  // Music Routes
  app.post('/api/musics', [requireUser, validateResource(createMusicSchema)], createMusicHandler);
  app.get('/api/musics/', getAllMusicHandler);
  app.put('/api/musics/:musicId', [requireUser, validateResource(updateMusicSchema)], updateMusicHandler);
  app.get('/api/musics/:musicId', [requireUser, validateResource(getMusicSchema)], getMusicHandler);
  app.delete('/api/musics/:musicId', [requireUser, validateResource(deleteMusicSchema)], deleteMusicHandler);
}

export default routes;