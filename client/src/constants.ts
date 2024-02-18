interface Music {
  user: string;
  title: string;
  artist: string;
  genre: string;
  length: number;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export const musicGenres = [
  'Pop',
  'Rock',
  'Hip-Hop/Rap',
  'Country',
  'Jazz',
  'Classical',
  'Electronic/Dance',
  'Blues',
  'Reggae',
  'Metal',
];

export const defaults = {
  API_ENDPOINT: 'https://music-app-api-sa8w.onrender.com',
  pageSize: 8,
  accessTokenTtl: '15m',
  refreshTokenTtl: '7d',
};

const musicList: Music[] = [
  {
    user: '6234abcde18f9b4321c0d210',
    title: 'Dreams in Color',
    artist: 'Lucid Harmony',
    genre: 'Electronic',
    length: 215,
    imageUrl: 'https://example.com/images/dreams-in-color.jpg',
    createdAt: '2024-02-10T09:00:00.000Z',
    updatedAt: '2024-02-10T09:00:00.000Z',
  },
  {
    user: '6234abcde18f9b4321c0d211',
    title: 'Night Drive',
    artist: 'The Midnight',
    genre: 'Synthwave',
    length: 241,
    imageUrl: 'https://example.com/images/night-drive.jpg',
    createdAt: '2024-02-11T10:00:00.000Z',
    updatedAt: '2024-02-11T10:00:00.000Z',
  },
  {
    user: '6234abcde18f9b4321c0d212',
    title: 'Summer Breeze',
    artist: 'Ocean View',
    genre: 'Chillout',
    length: 190,
    imageUrl: 'https://example.com/images/summer-breeze.jpg',
    createdAt: '2024-02-12T11:00:00.000Z',
    updatedAt: '2024-02-12T11:00:00.000Z',
  },
  {
    user: '6234abcde18f9b4321c0d213',
    title: 'Echoes of Silence',
    artist: 'Eternal Echo',
    genre: 'Ambient',
    length: 300,
    imageUrl: 'https://example.com/images/echoes-of-silence.jpg',
    createdAt: '2024-02-13T12:00:00.000Z',
    updatedAt: '2024-02-13T12:00:00.000Z',
  },
  {
    user: '6234abcde18f9b4321c0d214',
    title: 'Falling Stars',
    artist: 'Lunar Phases',
    genre: 'Trance',
    length: 275,
    imageUrl: 'https://example.com/images/falling-stars.jpg',
    createdAt: '2024-02-14T13:00:00.000Z',
    updatedAt: '2024-02-14T13:00:00.000Z',
  },
  {
    user: '6234abcde18f9b4321c0d215',
    title: 'City Lights',
    artist: 'Urban Dreams',
    genre: 'House',
    length: 230,
    imageUrl: 'https://example.com/images/city-lights.jpg',
    createdAt: '2024-02-15T14:00:00.000Z',
    updatedAt: '2024-02-15T14:00:00.000Z',
  },
  {
    user: '6234abcde18f9b4321c0d216',
    title: 'Retro Waves',
    artist: 'Neon Rider',
    genre: 'Retro',
    length: 210,
    imageUrl: 'https://example.com/images/retro-waves.jpg',
    createdAt: '2024-02-16T15:00:00.000Z',
    updatedAt: '2024-02-16T15:00:00.000Z',
  },
  {
    user: '6234abcde18f9b4321c0d217',
    title: 'Into the Wild',
    artist: "Nature's Voice",
    genre: 'World',
    length: 265,
    imageUrl: 'https://example.com/images/into-the-wild.jpg',
    createdAt: '2024-02-17T16:00:00.000Z',
    updatedAt: '2024-02-17T16:00:00.000Z',
  },
  // Add more items as needed
];

export default musicList;
