import { call, put, select, takeEvery } from 'redux-saga/effects';

import { RootState } from '..';
import { PayloadAction } from '@reduxjs/toolkit';
import musicService from '../../services/musicService';
import {
  FetchSuccessMusicResponse,
  getSelfMusicsSuccess,
  getSelfMusicsFailure,
} from './userSlice';

function* handleSelfFetchMusic(action: PayloadAction<{ type: string }>) {
  try {
    const { type } = action.payload;
    const currentPage = (state: RootState) => state.user.currPage;
    const page: number = yield select(currentPage);

    const nextPage =
      type === 'Left' ? page - 1 : type === 'Initial' ? 1 : page + 1;
    const response: FetchSuccessMusicResponse = yield call(
      musicService.fetchMyMusics,
      nextPage,
    );
    yield put(getSelfMusicsSuccess(response));
  } catch (err: any) {
    yield put(getSelfMusicsFailure({ message: err.message }));
  }
}

function* handleSelfDeleteMusic(action: PayloadAction<{ musicId: string }>) {
  try {
    const { musicId } = action.payload;
    yield call(musicService.deleteMusic, musicId);
    const response: FetchSuccessMusicResponse = yield call(
      musicService.fetchMyMusics,
      1,
    );
    yield put(getSelfMusicsSuccess(response));
  } catch (err: any) {
    console.log(err.message);
    yield put(getSelfMusicsFailure({ message: err.message }));
  }
}

function* handleSelfUpdateMusic(
  action: PayloadAction<{
    musicId: string;
    update: {
      title: string;
      artist: string;
      duration: string;
      imageUrl?: string;
      genre: string;
    };
  }>,
) {
  try {
    const {
      musicId,
      update: { duration, imageUrl, ...rest },
    } = action.payload;

    const newMusic = {
      ...(imageUrl ? { imageUrl } : {}),
      length: parseInt(duration),
      ...rest,
    };

    yield call(musicService.updateMusic, musicId, newMusic);
    const response: FetchSuccessMusicResponse = yield call(
      musicService.fetchMyMusics,
      1,
    );
    yield put(getSelfMusicsSuccess(response));
  } catch (error: any) {
    yield put(getSelfMusicsFailure({ message: error.message }));
  }
}

export function* watchUserFetchMusic() {
  yield takeEvery('user/getSelfMusics', handleSelfFetchMusic);
  yield takeEvery('user/deleteMusic', handleSelfDeleteMusic);
  yield takeEvery('user/updateMusic', handleSelfUpdateMusic);
}
