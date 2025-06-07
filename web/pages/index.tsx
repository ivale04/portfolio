import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Menubar } from "@/components/ui/menubar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

import { createSupabaseComponentClient } from "@/utils/supabase/clients/component";
import { createSupabaseServerClient } from "@/utils/supabase/clients/server-props";
import { GetServerSidePropsContext } from "next";
import { z } from "zod";
import { User } from "@supabase/supabase-js";
import { useEffect, useRef, useState } from "react";
import { InfiniteData, useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { getAllArtworks } from "@/utils/supabase/queries/artwork";
import Gallery from "@/components/gallery";
import ArtworkCard from "@/components/artwork-card"; 
import { Mail } from "lucide-react";
import { getFallbackRouteParams } from "next/dist/server/request/fallback-params";

import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "@/components/layout";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

enum HomePageTab {
  WORKS = "all works",
  FOR_SALE = "FOR SALE",
  COMMSSIONS = "COMMISSIONS", 
  ABOUT = "ABOUT",
  CONTACT = "CONTACT"
}


export default function Home() {
  const [user, setUser] = useState<User | null>(null);

  const queryClient = useQueryClient();
  const supabase = createSupabaseComponentClient();

  const [activeTab, setActiveTab] = useState<string>(HomePageTab.WORKS);

  // const fetchDataFn =
  //   activeTab === HomePageTab.WORKS ? getAllWorks
  //     : activeTab === HomePageTab.FOR_SALE ? getForSale
  //     : activeTab === HomePageTab.ABOUT ? getAbout
  //     : activeTab === HomePageTab.CONTACT ? getContact;

  // type Fake = {
  //   fetchNextPage: () => Promise<void>;
  // };
  // const {fetchNextPage }: Fake = {
  //   fetchNextPage: async () => {},
  // };

  const refresh = () => {
    queryClient.resetQueries();
  };

  const {
    data: artworks,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["artworks"],
    queryFn: async ({ pageParam = 0 }) => {
      const supabase = createSupabaseComponentClient();
  
      const { data, error } = await supabase
        .from("artwork")
        .select("*")
        .order("artwork_added_date", { ascending: false })
        .range(pageParam * 10, (pageParam + 1) * 10 - 1);
  
      if (error) throw new Error(error.message);
      return data ?? [];
    },
    initialPageParam: 0,
    getNextPageParam: (_lastPage, pages) => pages.length,
  });

  const router = useRouter();
  const current = router.pathname;


  return (
    <div
      className={`${geistSans.className} ${geistMono.className}  font-[family-name:var(--font-geist-sans)]`}
    >
      <Layout>
      <main className="flex flex-col items-center justify-center min-h-[80lvh]">
          <div className="flex flex-col row-start-2 sm:items-start pb-[30lvh]">
            <p className="text-4xl font-bold"> IVONE ALEXANDER </p>
            <p> fine artist </p>
          </div>
      </main> 

      <section className="flex flex-col items-center">
        <Separator className="bg-stone-200 w-screen"/>

        

        
        {/* <Tabs 
          value={activeTab.toString()}
          onValueChange={(tab) => setActiveTab(tab)} 
          className="drop-shadow-md pt-[2lvh] fixed z-5 bg-white top-0 left-0 w-full text-center">
            <div className="">
              <TabsList className="grid w-full grid-cols-4 self-center justify-center pr-[10lvw] pl-[10lvw]">
                <TabsTrigger value="ALL WORKS" className="hover:bg-stone-50">ALL WORKS</TabsTrigger>
                <TabsTrigger value="FOR SALE" className="hover:bg-stone-50">FOR SALE</TabsTrigger>
                <TabsTrigger value="ABOUT" className="hover:bg-stone-50">ABOUT</TabsTrigger> 
                <TabsTrigger value="CONTACT" className="hover:bg-stone-50">CONTACT<Mail /></TabsTrigger>
              </TabsList>
            </div>
        </Tabs> */}

        <div className="w-screen">
          <p className="bg-white rounded-3xl pl-8 pr-8 flex flex-col text-center justify-center justify-items-center text-xl font-light italic pt-[8lvh] pb-[8lvh]"> {activeTab} </p> 
          </div>
          <Separator className="bg-stone-200"/> 

        <div className="flex flex-col justify-items-center items-center bg-stone-50 pl-8 pr-8 pt-10 pb-25 h-full">  

          
          <div className="pt-[8lvh] columns-3xs sm:columns-2 lg:columns-4  gap-7 w-full max-w-4xl mx-auto px-5">

            <ArtworkCard title="Topsail Sunrise" year="2025" path={"/images/topsail-sunset.jpeg"} price={"150.00"}></ArtworkCard>
            <ArtworkCard path="/images/enjoying the sunshine.jpeg" title={"Enjoying the Sunshine"} year={"2025"} price={undefined}></ArtworkCard>


            <ArtworkCard path={"/images/cliff hq.jpeg"} title={"cliff"} year={"2024"} price={undefined}></ArtworkCard>
            <ArtworkCard path="/images/mommy.jpeg" title={"mom"} year={"2024"} price={undefined}></ArtworkCard>
            <ArtworkCard path="/images/daddy.jpeg" title={"dad"} year={"2024"} price={undefined}></ArtworkCard>
            <ArtworkCard path={"/images/daddy day-out.jpeg"} title={"daddy day-out"} year={"2024"} price={undefined}></ArtworkCard>
            <ArtworkCard path="/images/lightning.jpeg" title="lightning mcqueen!!" year="2024" price={undefined}></ArtworkCard>
            <ArtworkCard path="/images/ceiling fan.jpeg" title="floor" year="2024" price={undefined}></ArtworkCard>
            <ArtworkCard path="/images/sad vacation.jpeg" title={"SADVACATION"} year={"2024"} price={undefined}></ArtworkCard>


            <ArtworkCard path="/images/self portrait at 18:19.jpeg" title={"Self Portrait at 18/19"} year={"2023"} price={undefined}></ArtworkCard>
            <ArtworkCard path="/images/still life with mystery object.jpeg" title={"Still Life With Mystery Object"} year={"2023"} price={undefined}></ArtworkCard>
            <ArtworkCard path={"/images/alla prima banana.jpeg"} title={"Alla Prima Banana"} year={"2023"} price={undefined}></ArtworkCard>
            <ArtworkCard path="/images/cheese.jpeg" title="Cheese" year="2023" price={undefined}></ArtworkCard>
            <ArtworkCard path="/images/pepper.jpeg" title="Pepper" year="2023" price={undefined}></ArtworkCard>
            <ArtworkCard path="/images/the cape fear.jpg" title="Sunset Over the Cape Fear" year="2023" price={undefined}></ArtworkCard>
            <ArtworkCard path="/images/sunset plein air.JPG" title="Poplar Grove Plein Air" year="2023" price={undefined}></ArtworkCard>


            <ArtworkCard path="/images/august plein air.jpeg" title="August Creek" year="2022" price={undefined}></ArtworkCard>
            <ArtworkCard path="/images/cemetary 2.jpeg" title="Oakdale Sunbeams" year="2022" price={undefined}></ArtworkCard>
            <ArtworkCard path="/images/cemetary.jpeg" title="Gray Day" year="2022" price={undefined}></ArtworkCard>


            <ArtworkCard path="/images/holiday wonder.jpeg" title={"Holiday Wonder"} year={"2021"} price={undefined}></ArtworkCard>
            <ArtworkCard path="/images/grandparents.jpeg" title="GG and Vôvô" year="2021" price={undefined}></ArtworkCard>
            <ArtworkCard path="/images/pistachio.JPG" title="Pistachio" year="2021" price={undefined}></ArtworkCard>



            {/* Drawings */}
            <ArtworkCard path="/images/sketch 4.jpeg" title="Croquis 4" year="2024" price={undefined}></ArtworkCard>
            <ArtworkCard path="/images/sketch 3.jpeg" title="Croquis 3" year="2024" price={undefined}></ArtworkCard>
            <ArtworkCard path="/images/sketch 2.jpeg" title="Croquis 2" year="2024" price={undefined}></ArtworkCard>
            <ArtworkCard path="/images/sketch 1.jpeg" title="Croquis 1" year="2024" price={undefined}></ArtworkCard>
            <ArtworkCard path="/images/brent.jpeg" title="Brent" year="2024" price={undefined}></ArtworkCard>
            <ArtworkCard path="/images/raine.jpeg" title="Raine" year="2024" price={undefined}></ArtworkCard>
            <ArtworkCard path="/images/fallen angel.jpeg" title="Fallen Angel" year="2024" price={undefined}></ArtworkCard>
            <ArtworkCard path="/images/one and susan.jpg" title="Doctor Who and Susan" year="2021" price={undefined}></ArtworkCard>




            {/* Digital */}
            {/* <ArtworkCard path="/images/Bookmark_Entry.jpeg" title="UNC Libraries Commemorative Bookmark" year="2025"></ArtworkCard> */}

          </div>
          <p className="pt-15 text-xs text-stone-500"> nothing more to see! </p>
        </div>
      </section>
      </Layout>  

      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
