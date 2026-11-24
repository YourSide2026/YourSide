import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { categorySlugs } from './data/categories';

// Guides / articles. Each article is a Markdown file in src/content/guides/.
// The file name becomes the web address, e.g. what-is-a-mortgage.md -> /guides/what-is-a-mortgage/
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Shown in Google results and social shares. Aim for 140–160 characters.
      description: z.string(),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      category: z.enum(categorySlugs),
      // Optional extra topics the article also appears under (same slugs as category)
      tags: z.array(z.enum(categorySlugs)).default([]),
      // An adviser slug (dan, jorja, callan, bridie) or leave out for "The YourSide team"
      author: z.string().optional(),
      heroImage: image(),
      heroAlt: z.string(),
      // Pin one article to the top of the Guides page
      featured: z.boolean().default(false),
      // Drafts are hidden from the live site
      draft: z.boolean().default(false),
      // Short bullet points shown in a "Key takeaways" box at the top
      takeaways: z.array(z.string()).default([]),
    }),
});

export const collections = { guides };
