import axios from 'axios';
import { defaults } from '../constants';
import Cookies from 'js-cookie';

const API_ENDPOINT = defaults.API_ENDPOINT;

const userService = {
  signIn: async (email: string, password: string) => {
    try {
      const response = await axios.post(`${API_ENDPOINT}/api/sessions`, {
        email,
        password,
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
  signOut: async () => {
    try {
      await axios.delete(`${API_ENDPOINT}/api/sessions`, {
        headers: {
          Authorization: `Bearer ${Cookies.get('accessToken')}`,
          'x-refresh': Cookies.get('refreshToken'),
        },
      });
    } catch (error) {
      throw error;
    }
  },
  createUser: async (user: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    try {
      await axios.post(`${API_ENDPOINT}/api/users`, {
        ...user,
      });
    } catch (error) {
      throw error;
    }
  },
};

export default userService;
