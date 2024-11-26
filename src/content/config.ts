import { defineCollection, z } from 'astro:content';

const illustrationsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    image: z.string(),
    alt: z.string(),
  }),
});

export const collections = {
  illu: illustrationsCollection,
};
