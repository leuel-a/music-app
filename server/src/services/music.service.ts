import MusicModel, { MusicDocument, MusicInput } from '../models/music.model';

export async function createMusic(input: MusicInput): Promise<MusicDocument> {
  return MusicModel.create(input);
}