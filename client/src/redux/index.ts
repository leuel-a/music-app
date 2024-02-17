import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';
import musicReducer from './musics/musicSlice';
import authReducer from './authentication/authSlice';
import userReducer from './user/userSlice';
import createMusicReducer from './createMusic/createMusicSlice';

export const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    music: musicReducer,
    auth: authReducer,
    user: userReducer,
    createMusic: createMusicReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
