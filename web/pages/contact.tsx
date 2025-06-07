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
          <p className="text-xl font-light italic pt-[8lvh] pb-[8lvh]"> contact </p> 
        <Separator className="bg-stone-200"/>  

        
          
        </div>
    </div>

    </Layout>
    </div>
  );
}