import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest, takeLeading } from 'redux-saga/effects';
import Cookies from 'js-cookie';
import userService from '../../services/userService';
import { LoginUserResponse } from '../../types/User';
import { AxiosError, AxiosResponse } from 'axios';
import {
  loginSuccess,
  loginFailure,
  checkAuthState,
  registerRequest,
  registerFailure,
  registerSuccess,
} from './authSlice';
import { defaults } from '../../constants';

function* checkAccessToken() {
  const accessToken = Cookies.get('accessToken');

  const isAuthenticated = !!accessToken;
  yield put(checkAuthState({ isAuthenticated }));
}

// Worker Saga for Handling User Authentication
function* handleUserAuthentication(
  action: PayloadAction<{ email: string; password: string }>,
) {
  try {
    const { email, password } = action.payload;
    const response: AxiosResponse<LoginUserResponse> = yield call(
      userService.signIn,
      email,
      password,
    );
    const { accessToken, refreshToken } = response.data;

    Cookies.set('accessToken', accessToken, {
      expires: parseInt(defaults.accessTokenTtl),
    });

    Cookies.set('refreshToken', refreshToken, {
      expires: parseInt(defaults.refreshTokenTtl),
    });

    yield put(loginSuccess());
  } catch (error) {
    const e = error as AxiosError<{ message: string }>;
    const message = e.response?.data.message as string;
    yield put(loginFailure({ message }));
  }
}

function* handleUserLogout() {
  yield call(userService.signOut);

  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');
}

function* handleCreateUser(
  action: PayloadAction<{
    name: string;
    password: string;
    email: string;
    confirmPassword: string;
  }>,
) {
  try {
    yield call(userService.createUser, action.payload);
    yield put(registerSuccess());
  } catch (error: any) {
    console.log(error);
    yield put(registerFailure({ message: error.message }));
  }
}

// Watcher Saga for User Authentication
export function* watchUserAuthentication() {
  yield takeLatest('auth/loginRequest', handleUserAuthentication);
  yield takeLatest('auth/logoutRequest', handleUserLogout);
  yield takeLatest('auth/registerRequest', handleCreateUser);
}

// Watcher Saga for the Access Token
export function* watchAccessToken() {
  yield takeLeading('@init/checkAccessToken', checkAccessToken);
}
