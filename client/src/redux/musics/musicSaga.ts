import { PayloadAction } from '@reduxjs/toolkit';
import { put, call, takeLatest, select } from 'redux-saga/effects';

import { RootState } from '..';
import musicService from '../../services/musicService';
import { GetAllMusicResponse } from '../../types/Music';
import { fetchMusicsFailure, fetchMusicsSuccess } from './musicSlice';

function* handleFetchMusics(action: PayloadAction<{ type: string }>) {
  try {
    const { type } = action.payload;

    const currentPage = (state: RootState) => state.music.currPage;

    const page: number = yield select(currentPage);

    const response: Promise<GetAllMusicResponse> = yield call(
      musicService.fetchAllMusics,
      type === 'Left' ? page - 1 : type === 'Initial' ? 1 : page + 1,
    );

    yield put(fetchMusicsSuccess(response as unknown as GetAllMusicResponse));
  } catch (error: any) {
    yield put(fetchMusicsFailure(error.message));
  }
}

function* watchGetMusic() {
  yield takeLatest('music/fetchMusics', handleFetchMusics);
}

export default watchGetMusic;
