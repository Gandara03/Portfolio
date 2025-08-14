import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		// Nuevos campos para SEO y Open Graph
		keywords: z.string().optional(),
		author: z.string().optional(),
		category: z.string().optional(),
		readTime: z.number().optional(),
	}),
});

export const collections = { blog };
