import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const linkSchema = z.object({
  label: z.string(),
  icon: z.string().optional(),
  to: z.string(),
  target: z.string().optional(),
  color: z.string().optional(),
  variant: z.string().optional(),
  size: z.string().optional(),
})

const metaSchema = z
  .object({
    icon: z.string().optional(),
    badge: z.string().optional(),
    color: z.string().optional(),
  })
  .optional()

export default defineContentConfig({
  collections: {
    modules: defineCollection({
      type: 'page',
      source: {
        include: '**',
        exclude: ['**/.resources.yml', '.navigation.yml'],
      },
      schema: z
        .object({
          meta: metaSchema,
        })
        .passthrough(),
    }),
    resources: defineCollection({
      type: 'data',
      source: '**/.resources.yml',
      schema: z.object({
        summary: z
          .object({
            id: z.string(),
            title: z.string(),
            subtitle: z.string(),
            description: z.string(),
            icon: z.string(),
            to: z.string(),
            gradient: z.string(),
            image: z.string(),
            keyPoints: z.array(z.string()),
          })
          .optional(),
        usefulLinks: z.array(linkSchema).optional(),
        exercises: z.array(linkSchema).optional(),
      }),
    }),
  },
})
