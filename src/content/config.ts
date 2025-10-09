import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    link: z.string().url().optional(),
    date: z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid date format",
    }),
    images: z.array(z.string()).optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
