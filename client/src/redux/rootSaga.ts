import { all, fork } from 'redux-saga/effects';
import watchGetMusic from './musics/musicSaga';
import {
  watchUserAuthentication,
  watchAccessToken,
} from './authentication/authSaga';
import { watchUserFetchMusic } from './user/userSaga';
import watchUserCreateMusic from './createMusic/createMusicSaga';

const rootSaga = function* () {
  yield all([
    fork(watchGetMusic),
    fork(watchUserAuthentication),
    fork(watchAccessToken),
    fork(watchUserFetchMusic),
    fork(watchUserCreateMusic),
  ]);
};

export default rootSaga;
