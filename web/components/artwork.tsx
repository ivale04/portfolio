// import { ExternalLink, Heart } from "lucide-react";
// import { Button } from "./ui/button";
// import { z } from "zod";
// import { createSupabaseComponentClient } from "@/utils/supabase/clients/component";
// import { useState } from "react";
// import { User } from "@supabase/supabase-js";
// import Link from "next/link";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import { Artwork } from "@/utils/supabase/models/artwork";

// type ArtworkProps = {
//   artwork: z.infer<typeof Artwork>;
// };

// export default function ArtworkCard({ artwork }: ArtworkProps) {

//     const supabase = createSupabaseComponentClient();
//     const router = useRouter();

//   return (
//     <div className="flex flex-row w-full gap-3 p-6">

//       <div className="flex flex-col gap-3 w-full">
//         <div className="flex flex-col gap-4 my-2 min-w-full">
//           {/* Show the post's image, if it exists. */}
//           {artwork.image_url && (
//             <Image
//               className="rounded-xl"
//               src={
//                 supabase.storage
//                   .from("images")
//                   .getPublicUrl(artwork.image_url).data.publicUrl
//               }
//               alt="Image"
//               width={600}
//               height={600}
//             />
//           )}
//           <p>{artwork.title}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
