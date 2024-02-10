import z from 'zod';

export const createMusicSchema = z.object({
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
    imageUrl: z.string().url('Must be a valid URL'),
  }),
});

export type CreateMusicInput = z.infer<typeof createMusicSchema>;