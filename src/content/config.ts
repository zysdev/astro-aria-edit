import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    dateFormatted: z.string(),
  }),
});

const projectCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      image: image(),
      url: z.string(),
    }),
});

export const collections = {
  post: postCollection,
  project: projectCollection,
};
