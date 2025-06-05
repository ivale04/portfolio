import { Fragment, useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import { z } from "zod";
import { InfiniteData } from "@tanstack/react-query";
import { Separator } from "./ui/separator";
import { User } from "@supabase/supabase-js";
import { Artwork } from "@/utils/supabase/models/artwork";
import ArtworkCard from "./artwork";
import { createSupabaseComponentClient } from "@/utils/supabase/clients/component";
import { getAllArtworks } from "@/utils/supabase/queries/artwork";
import Image from "next/image";

type GalleryProps = {
    artworks: InfiniteData<z.infer<typeof Artwork>[]> | undefined;
    fetchNext: () => void;
  };

export default function Gallery({artworks, fetchNext}: GalleryProps) {

    const supabase = createSupabaseComponentClient();
    


  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 w-full max-w-7xl mx-auto px-4">
      {artworks.map((artwork) => (
        <div key={artwork.id} className="rounded-md shadow-md">
          <Image
            src={artwork.image_url}
            alt={artwork.title}
          />
          <p>{artwork.title}</p>
        </div>
      ))}
    </div>
    </>
  );
}
