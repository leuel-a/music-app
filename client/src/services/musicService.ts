import axios from 'axios';
import Cookies from 'js-cookie';

import { defaults } from '../constants';

const API_ENDPOINT = defaults.API_ENDPOINT;

const musicService = {
  fetchAllMusics: async (page: number = 1, pageSize: number = 8) => {
    try {
      const response = await axios.get(
        `${API_ENDPOINT}/api/musics?page=${page}&pageSize=${pageSize}`,
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  fetchMyMusics: async (page: number = 1, pageSize: number = 8) => {
    try {
      const response = await axios.get(
        `${API_ENDPOINT}/api/users/musics?page=${page}&pageSize=${pageSize}`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('accessToken')}`,
            'x-refresh': Cookies.get('refreshToken'),
          },
        },
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  createNewMusic: async (music: {
    title: string;
    artist: string;
    length: number;
    imageUrl?: string;
    genre: string;
  }) => {
    try {
      const response = await axios.post(`${API_ENDPOINT}/api/musics`, music, {
        headers: {
          Authorization: `Bearer ${Cookies.get('accessToken')}`,
          'x-refresh': Cookies.get('refreshToken'),
          'content-type': 'application/json',
        },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  deleteMusic: async (musicId: string) => {
    try {
      await axios.delete(`${API_ENDPOINT}/api/musics/${musicId}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get('accessToken')}`,
          'x-refresh': Cookies.get('refreshToken'),
        },
      });
    } catch (error) {
      throw error;
    }
  },
  updateMusic: async (
    musicId: string,
    music: {
      title: string;
      artist: string;
      length: number;
      imageUrl?: string;
      genre: string;
    },
  ) => {
    try {
      await axios.put(`${API_ENDPOINT}/api/musics/${musicId}`, music, {
        headers: {
          Authorization: `Bearer ${Cookies.get('accessToken')}`,
          'x-refresh': Cookies.get('refreshToken'),
        },
      });
    } catch (error) {
      throw error;
    }
  },
};

export default musicService;
