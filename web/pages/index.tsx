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


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

enum HomePageTab {
  WORKS = "ALL WORKS",
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

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col items-center justify-center min-h-screen">
          <div className="flex flex-col row-start-2 sm:items-start pb-[30lvh]">
            <p className="text-4xl font-bold"> IVONE ALEXANDER </p>
            <p> fine artist </p>
          </div>
      </main>

      <section className="flex flex-col items-center">
        <Separator/>

        <div className="flex flex-col justify-items-center items-center bg-stone-50 pl-14 pr-14"> 

          <Tabs 
          value={activeTab.toString()}
          onValueChange={(tab) => setActiveTab(tab)} 
          className="pt-[5lvh]">
            <div className="">
              <TabsList className="grid w-full grid-cols-5 self-center justify-center ">
                <TabsTrigger value="ALL WORKS" className="hover:bg-stone-50">ALL WORKS</TabsTrigger>
                <TabsTrigger value="FOR SALE" className="hover:bg-stone-50">FOR SALE</TabsTrigger>
                <TabsTrigger value="COMMISSIONS" className="hover:bg-stone-50">COMMISSIONS</TabsTrigger>
                <TabsTrigger value="ABOUT" className="hover:bg-stone-50">ABOUT</TabsTrigger> 
                <TabsTrigger value="CONTACT" className="hover:bg-stone-50">CONTACT</TabsTrigger>
              </TabsList>
            </div>
          </Tabs>

          <p className="flex flex-col justify-center text-xl font-medium pt-[8lvh] pb-[12lvh]"> {activeTab} </p> 

          {/* <Gallery></Gallery> */}
          <div className="columns-2 sm:columns-2 lg:columns-3 space-y-[4lvh] gap-12 w-full max-w-4xl mx-auto px-8">

            <ArtworkCard title="Topsail Sunset" year="2025" path={"/images/topsail-sunset.jpeg"} price={"150.00"}></ArtworkCard>
            <ArtworkCard path="/images/enjoying the sunshine.jpeg" title={"Enjoying the Sunshine"} year={"2025"} price={undefined}></ArtworkCard>


            <ArtworkCard path={"/images/cliff.jpeg"} title={"cliff"} year={"2024"} price={undefined}></ArtworkCard>
            <ArtworkCard path={"/images/daddy day-out.jpeg"} title={"daddy day-out!"} year={"2024"} price={undefined}></ArtworkCard>
            

            <ArtworkCard path="/images/mommy.jpeg" title={"mommy"} year={"2024"} price={undefined}></ArtworkCard>
            <ArtworkCard path="/images/daddy.jpeg" title={"daddy"} year={"2024"} price={undefined}></ArtworkCard>
            <ArtworkCard path="/images/sad vacation.jpeg" title={"SADVACATION"} year={"2024"} price={undefined}></ArtworkCard>

            <ArtworkCard path="/images/still life with mystery object.jpeg" title={"Still Life With Mystery Object"} year={"2023"} price={undefined}></ArtworkCard>
            <ArtworkCard path="/images/self portrait at 18:19.jpeg" title={"Self Portrait at 18/19"} year={"2023"} price={undefined}></ArtworkCard>
            <ArtworkCard path={"/images/alla prima banana.jpeg"} title={"Alla-prima Banana"} year={"2023"} price={undefined}></ArtworkCard>

            <ArtworkCard path="/images/holiday wonder.jpeg" title={"Holiday Wonder"} year={"2021"} price={undefined}></ArtworkCard>


            {/* <Card className="h-50"></Card>
            <Card className="h-70"></Card>
            <Card className="h-100"></Card>
            <Card className="h-90"></Card>
            <Card className="h-80"></Card>
            <Card className="h-90"></Card>
            <Card className="h-65"></Card> */}
          </div>
        </div>
      </section>

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
