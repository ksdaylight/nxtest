import { z } from 'zod';
import { initContract } from '@ts-rest/core';


const c = initContract();
export const appsApi = c.router(
  {
    createPost: {
      method: 'POST',
      path: '/posts',
      responses: {
        201: z.any(),
      },
      body: z.object({
        title: z.string(),
      }),
      summary: 'Create a post',
      metadata: { role: 'user' } as const,
    },
  },
  {
    baseHeaders: z.object({
      Authorization: z.string().optional(),
    }),
    pathPrefix: `/api`,
  }
);
