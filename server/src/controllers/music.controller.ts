import { Request, Response } from 'express';
import { omit } from 'lodash';

import { CreateMusicInput } from '../schemas/music.schema';
import { createMusic } from '../services/music.service';

export async function createMusicHandler(req: Request<{}, {}, CreateMusicInput['body']>, res: Response) {
  const userId = res.locals.user._id;
  const music = await createMusic({ ...req.body, user: userId });
  return res.send(omit(music.toJSON(), ['__v']));
}