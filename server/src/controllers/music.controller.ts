import { Request, Response } from 'express';
import { omit } from 'lodash';

import { CreateMusicInput, DeleteMusicInput, GetMusicInput, UpdateMusicInput } from '../schemas/music.schema';
import { createMusic, deleteMusic, findAndUpdate, findMusic, getAllMusic } from '../services/music.service';

export async function createMusicHandler(req: Request<{}, {}, CreateMusicInput['body']>, res: Response) {
  const userId = res.locals.user._id;
  const music = await createMusic({ ...req.body, user: userId });
  return res.send(omit(music.toJSON(), ['__v']));
}

export async function updateMusicHandler(req: Request<UpdateMusicInput['params'], {}, UpdateMusicInput['body']>, res: Response) {
  const userId = res.locals.user._id;
  const musicId = req.params.musicId;
  const update = req.body;

  const music = await findMusic({ _id: musicId });
  if (!music) {
    return res.sendStatus(404);
  }

  if (String(music.user) !== userId) {
    return res.sendStatus(401);
  }

  const updateProduct = await findAndUpdate({ _id: musicId }, update, { new: true });
  return res.send(updateProduct);
}

export async function getMusicHandler(req: Request<GetMusicInput['params']>, res: Response) {
  const userId = res.locals.user._id;
  const musicId = req.params.musicId;

  const music = await findMusic({ _id: musicId });
  if (!music) {
    return res.sendStatus(404);
  }

  if (String(music.user) !== userId) {
    return res.sendStatus(401);
  }
  return res.send(music);
}

export async function getSelfMusicHandler(req: Request, res: Response) {
  const userId = res.locals.user._id;
  const page = parseInt(req.query.page as string) || 1;
  const pageSize = parseInt(req.query.pageSize as string) || 10;

  const musics = await getAllMusic(page, pageSize, userId);
  return res.send(musics);
}

export async function getAllMusicHandler(req: Request, res: Response) {
  const page = parseInt(req.query.page as string) || 1;
  const pageSize = parseInt(req.query.pageSize as string) || 10;

  const musics = await getAllMusic(page, pageSize);
  return res.send(musics);
}

export async function deleteMusicHandler(req: Request<DeleteMusicInput['params']>, res: Response) {
  const userId = res.locals.user._id;
  const musicId = req.params.musicId;

  const music = await findMusic({ _id: musicId });
  if (!music) {
    return res.sendStatus(404);
  }

  if (String(music.user) !== userId) {
    return res.sendStatus(401);
  }

  await deleteMusic({ _id: musicId });
  return res.sendStatus(200);
}

