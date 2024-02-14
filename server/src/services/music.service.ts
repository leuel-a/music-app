import MusicModel, { MusicDocument, MusicInput } from '../models/music.model';
import { FilterQuery, QueryOptions, UpdateQuery } from 'mongoose';

export async function createMusic(input: MusicInput): Promise<MusicDocument> {
  return MusicModel.create(input);
}

export async function findMusic(query: FilterQuery<MusicDocument>, options: QueryOptions = { lean: true }) {
  return MusicModel.findOne(query, {}, options);
}

export async function getAllMusic(page: number, pageSize: number, userId?: string) {
  if (userId) {
    return MusicModel.find({ user: userId }).skip((page - 1) * pageSize).limit(pageSize).lean();
  }
  return MusicModel.find({}).skip((page - 1) * pageSize).limit(pageSize).lean();
}

export async function findAndUpdate(query: FilterQuery<MusicDocument>, update: UpdateQuery<MusicDocument>, options: QueryOptions) {
  return MusicModel.findOneAndUpdate(query, update, options);
}

export async function deleteMusic(query: FilterQuery<MusicDocument>) {
  return MusicModel.deleteOne(query);
}
