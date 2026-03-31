import { defineCollection, z } from "astro:content";
import { AlertTriangle } from "lucide-react";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.string(),
  }),
});

const lab = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    status: z.enum(["Ongoing", "Iterating", "Blocked", "Completed"]),
    tried: z.union([z.string(), z.array(z.string())]),
    happened: z.union([z.string(), z.array(z.string())]),
    keyLearning: z.union([z.string(), z.array(z.string())]),
    next: z.union([z.string(), z.array(z.string())]),
  }),
})

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    hook: z.string(),
    category: z.string(),
    date: z.string(),
    thumbnail: z.string(), 
    altText: z.string(),
    tags: z.array(z.string()),
    projectUrl: z.string().optional(),
    githubUrl: z.string(),
    description: z.string()
  })
})

export const collections = { blog, lab, projects };