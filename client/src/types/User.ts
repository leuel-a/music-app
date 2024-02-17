export interface LoginUserResponse {
  accessToken: string;
  refreshToken: string;
}

export interface User {
  _id: string;
  email: string;
  name: string;
  password: string;
  createdAt: string;
  updatedAt: string;
} 