import { PayloadAction } from '@reduxjs/toolkit';
import { call, takeEvery, put } from 'redux-saga/effects';
import musicService from '../../services/musicService';
import {
  createMusicRequestSuccess,
  createMusicRequestFailure,
} from './createMusicSlice';
import { getSelfMusics } from '../user/userSlice';

function* handleCreateMusic(
  action: PayloadAction<{
    title: string;
    artist: string;
    duration: string;
    imageUrl?: string;
    genre: string;
  }>,
) {
  const { imageUrl, duration, ...rest } = action.payload;
  const newMusic = {
    ...(imageUrl ? { imageUrl } : {}),
    length: parseInt(duration),
    ...rest,
  };
  try {
    yield call(musicService.createNewMusic, newMusic);
    yield put(createMusicRequestSuccess);
  } catch (error: any) {
    yield put(createMusicRequestFailure(error.message));
  }
}

function* watchUserCreateMusic() {
  yield takeEvery('createMusic/createMusicRequest', handleCreateMusic);
}

export default watchUserCreateMusic;
