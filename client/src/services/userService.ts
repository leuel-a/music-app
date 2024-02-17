import axios from 'axios';
import { defaults } from '../constants';

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
};

export default userService;
