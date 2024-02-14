import z from 'zod';

const payload = {
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }).max(100, 'Must be 100 characters or less'),
    artist: z.string({
      required_error: 'Artist is required',
    }),
    genre: z.string({
      required_error: 'Genre is required',
    }),
    length: z.number({
      required_error: 'Length is required',
    }),
    imageUrl: z.string().url('Must be a valid URL').optional(),
  }),
};

const params = {
  params: z.object({
    musicId: z.string({
      required_error: 'musicId is required',
    }),
  }),
};

export const createMusicSchema = z.object({
  ...payload,
});

export const updateMusicSchema = z.object({
  ...payload,
  ...params,
});

export const deleteMusicSchema = z.object({
  ...params,
});

export const getMusicSchema = z.object({
  ...params,
});

export type CreateMusicInput = z.infer<typeof createMusicSchema>;
export type UpdateMusicInput = z.infer<typeof updateMusicSchema>;
export type DeleteMusicInput = z.infer<typeof deleteMusicSchema>;
export type GetMusicInput = z.infer<typeof getMusicSchema>;