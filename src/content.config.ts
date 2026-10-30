import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

const linkSchema = z.object({
	label: z.string(),
	href: z.string(),
});

const profile = defineCollection({
	loader: file("content/profile.json"),
	schema: z.object({
		site: z.object({
			title: z.string(),
			description: z.string(),
			navigation: z.array(linkSchema),
		}),
		home: z.object({
			title: z.string(),
			name: z.string(),
			headline: z.string(),
			eyebrow: z.string(),
			researchQuestion: z.string(),
			portrait: z.object({
				src: z.string(),
				alt: z.string(),
			}),
			bio: z.string(),
			highlightsHeading: z.string(),
			highlights: z.array(z.string()),
			quickLinksHeading: z.string(),
			quickLinks: z.array(linkSchema),
		}),
		about: z.object({
			title: z.string(),
			intro: z.string(),
			educationHeading: z.string(),
			education: z.array(
				z.object({
					institution: z.string(),
					summary: z.string(),
					details: z.array(z.string()),
				}),
			),
			interestsHeading: z.string(),
			interests: z.array(z.string()),
			toolkitHeading: z.string(),
			toolkit: z.array(z.string()),
			recognitionHeading: z.string(),
			recognition: z.array(z.string()),
		}),
		contact: z.object({
			title: z.string(),
			intro: z.string(),
			items: z.array(
				z.object({
					label: z.string(),
					value: z.string(),
					href: z.string().optional(),
					external: z.boolean().default(false),
				}),
			),
			note: z.string(),
		}),
		experience: z.object({
			title: z.string(),
			entries: z.array(
				z.object({
					organization: z.string(),
					summary: z.string(),
					highlights: z.array(z.string()),
				}),
			),
		}),
		research: z.object({
			title: z.string(),
			intro: z.string(),
			projectsHeading: z.string(),
			publicationsHeading: z.string(),
			publicationsNote: z.string(),
		}),
	}),
});

const projects = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./content/projects" }),
	schema: z.object({
		order: z.number().int().positive(),
		title: z.string(),
		role: z.string(),
		period: z.string(),
		description: z.string(),
		highlights: z.array(z.object({ label: z.string(), text: z.string() })),
		links: z.array(linkSchema).default([]),
	}),
});

const publications = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./content/publications" }),
	schema: z.object({
		order: z.number().int().positive(),
		authors: z.string(),
		year: z.number().int(),
		title: z.string(),
		journal: z.string(),
		volume: z.string(),
		pages: z.string().optional(),
		links: z.array(linkSchema).default([]),
	}),
});

export const collections = { profile, projects, publications };
