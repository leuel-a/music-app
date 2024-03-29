import _ from 'lodash';
import { Request, Response, NextFunction } from 'express';
import { verifyJwt } from '../utils/jwt.utils';
import { reIssueAccessToken } from '../services/session.service';

const deserializeUser = async (req: Request, res: Response, next: NextFunction) => {
  const accessToken = _.get(req, 'headers.authorization', '').replace(/^Bearer\s/, '');
  if (!accessToken) return next();

  const refreshToken = _.get(req, 'headers.x-refresh') as string;

  const { decoded, expired } = verifyJwt(accessToken);
  if (decoded) {
    res.locals.user = decoded;
    return next();
  }
  if (expired && refreshToken) {
    const newAccessToken = await reIssueAccessToken(refreshToken);

    if (newAccessToken) {
      res.setHeader('x-access-token', newAccessToken);
    }

    const result = verifyJwt(newAccessToken as string);
    res.locals.user = result.decoded;
    return next();
  }

  return next();
};

export default deserializeUser;