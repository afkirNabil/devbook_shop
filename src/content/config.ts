import { defineCollection, z } from "astro:content";
// z --> zod schema ( tipos de datos, formas de objeto ) validation library

const books = defineCollection({
// una de las utilidades q tiene es autocompletado 
// y validacion de la estructura del objeto
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    readtime: z.number(),
    description: z.string(),
    buy: z.object({
      spain: z.string().url(),
      usa: z.string().url(),
    }),
  })
})

export const collections = { books }