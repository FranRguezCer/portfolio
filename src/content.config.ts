import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    locale: z.enum(['en', 'es']),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      order: z.number().int().positive(),
      year: z.number().int().min(2010).max(2100),
      image: image(),
      link: z.string().url(),
      linkType: z.enum(['repo', 'demo', 'dashboard', 'notebook']),
      tech: z.array(z.string()).min(1),
      featured: z.boolean().default(false),
      locale: z.enum(['en', 'es']),
    }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    organization: z.string(),
    location: z.string().optional(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().nullable().optional(),
    order: z.number().int().positive(),
    current: z.boolean().default(false),
    locale: z.enum(['en', 'es']),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/education' }),
  schema: z.object({
    degree: z.string(),
    institution: z.string(),
    location: z.string().optional(),
    startYear: z.number().int().optional(),
    endYear: z.number().int().optional(),
    order: z.number().int().positive(),
    kind: z.enum(['degree', 'courses']),
    locale: z.enum(['en', 'es']),
  }),
});

const skills = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/skills' }),
  schema: z.object({
    name: z.string(),
    icon: z.string(),
    order: z.number().int().positive(),
    tags: z.array(z.string()).default([]),
    locale: z.enum(['en', 'es']),
  }),
});

export const collections = {
  pages,
  projects,
  experience,
  education,
  skills,
};
