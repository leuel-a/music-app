import { omit } from 'lodash';
import { Response, Request } from 'express';

import logger from '../utils/logger';
import { createUser } from '../services/user.service';
import { CreateUserInput } from '../schemas/user.schema';

export async function createUserHandler(req: Request<{}, {}, CreateUserInput['body']>, res: Response) {
  try {
    const user = await createUser(req.body);
    return res.send(omit(user.toJSON(), ['password', '__v']));
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e);
  }
}