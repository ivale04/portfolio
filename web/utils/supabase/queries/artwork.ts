/**
 * /queries/posts contains all of the Supabase queries for
 * creating, reading, updating, and deleting data in our
 * database relating to posts.
 *
 * @author Ajay Gandecha <agandecha@unc.edu>
 * @license MIT
 * @see https://comp426-25s.github.io/
 */

import { SupabaseClient, User } from "@supabase/supabase-js";
import { emptyArtwork, Artwork } from "../models/artwork";
import { z } from "zod";
import { count, profile } from "console";
import { randomUUID } from "crypto";

/**
 * @note Once you implement this method, you should
 *       be able to view any post you added in your
 *       database at the route:
 *       /post/:id
 *
 * @param supabase: Supabase client to use.
 * @param user: Active user making the request.
 * @param postId: Post data to retrieve.
 * @returns: Post object.
 */
export const getArtwork = async (
  supabase: SupabaseClient,
  artworkId: string
): Promise<z.infer<typeof Artwork>> => {
  
  const { data, error } = await supabase
  .from("artwork")
  .select(`id, title, year, short_description, long_description, image_url, artwork_added_date`)
  .eq("id", artworkId)
  .single() 

  if (error) {
    console.log(`Error retrieving artwork! ${error.message}`)
    throw Error(`Error retrieving artwork! ${error.message}`)
  }

  return Artwork.parse(data);
};

/**
 * This method takes is *paginated* - meaning that it
 * should only load a range of data at a time, but not
 * all of the data at once. The method passes in a
 * `cursor` parameter which should determine the starting
 * index for the post to load. Each page should be a length
 * of 25 posts long. For example, if the database
 * contains 100 posts and the cursor is set to 10, posts
 * 10 through 35 should be loaded.
 *
 * The data returned should match the format of an array of
 * `Post` Zod models. Make sure to select the correct
 * columns and perform any joins that are necessary.
 * Refer to the Supabase documentation for details.
 *
 * You can perform casting and validation of any generic
 * data to a Zod model using: ModelName.parse(data)
 *
 * Ensure to throw errors if present.
 *
 * @note Once you implement this method, you should
 *       be able to view recent posts at the route:
 *       /
 *
 * @param supabase: Supabase client to use.
 * @param user: Active user making the request.
 * @param cursor: Starting index of the page.
 * @returns: Post object.
 */
export const getAllArtworks = async (
  supabase: SupabaseClient,
  cursor: number
): Promise<z.infer<typeof Artwork>[]> => {

  const { data, error } = await supabase
  .from("artwork")
  .select(`id, title, year, short_description, long_description, image_url, artwork_added_date`)
  .order("artwork_added_date", {ascending: false}) // REVERSE chron order
  .range(cursor, cursor + 25) // first 25 including index

  if (error) {
    console.log(`Error! ${error.message}`)
    throw Error(`Error! ${error.message}`)
  }

  return Artwork.array().parse(data);
};

export const getAllWorks = () => {

}

export const getForSale = () => {

}

export const getAbout = () => {

}

export const getContact = () => {

}
