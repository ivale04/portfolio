/**
 * This file contains all of the Zod validation models
 * used to ensure that our Supabase query functions
 * ultimately return data in the correct format.
 *
 * Zod is the industry standard for schema validation.
 * It allows for easy casting of and validation of data.
 *
 * Zod types are defined as objects that contains fields.
 * We can compose Zod types as well as shown below.
 *
 * To access the pure type of any Zod model, we can use:
 * z.infer<typeof Model>
 *
 * In the future, we will use Zod in many more places, so
 * it is good to introduce it here.
 *
 * @author Ajay Gandecha <agandecha@unc.edu>
 * @license MIT
 * @see https://comp426-25s.github.io/
 */

import { z } from "zod";

/** Defines the schema for artworks. */
export const Artwork = z.object({
  id: z.string(),
  title: z.string(),
  year: z.string(),
  short_description: z.string(),
  long_description: z.string(), 
  image_url: z.string().nullable(),
  artwork_added_date: z.date({ coerce: true }),
});


/**
 * Helper variables containing empty models so that
 * `npm run dev` runs when on the blank starter code.
 */

export const emptyArtwork = Artwork.parse({
  id: "",
  title: "",
  year: "",
  short_description: "",
  long_description: "", 
  image_url: null,
  artwork_added_date: new Date(),
});
