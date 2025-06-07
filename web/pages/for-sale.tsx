import ArtworkCard from "@/components/artwork-card";
import Layout from "@/components/layout";
import { Separator } from "@/components/ui/separator";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function AboutPage() {
  return (
    <div className={`${geistSans.className} ${geistMono.className} font-[family-name:var(--font-geist-sans)]`}>
        <Layout>

    <div className="flex flex-col items-center absolute top-0 left-0">
        <div className="w-screen bg-white rounded-3xl pl-8 pr-8 flex flex-col text-center justify-center justify-items-center pt-[8lvh] pb-[8lvh]">
        {/* <Separator className="bg-stone-200"/> */}
          <p className="text-xl font-light italic pt-[8lvh] pb-[8lvh]"> for sale </p> 
        <Separator className="bg-stone-200"/>  

        <div className="pt-[3lvh] grid xs: grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-2xl justify-center self-center gap-x-9">
            <ArtworkCard title="Topsail Sunrise" year="2025" path={"/images/topsail-sunset.jpeg"} price={"150.00"}></ArtworkCard>    
            <ArtworkCard path="/images/the cape fear.jpg" title="Sunset Over the Cape Fear" year="2023" price={"100.00"}></ArtworkCard>
            <ArtworkCard path="/images/sunset plein air.JPG" title="Poplar Grove Plein Air" year="2023" price={"100.00"}></ArtworkCard>
            <ArtworkCard path="/images/cemetary.jpeg" title="Gray Day" year="2022" price={"100.00"}></ArtworkCard>
        </div>

        <p className="text-stone-400 text-xs font-sans pt-3"> You've reached the end! </p>
        
          
        </div>
    </div>

    </Layout>
    </div>
  );
}
