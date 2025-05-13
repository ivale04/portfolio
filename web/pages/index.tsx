import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Menubar } from "@/components/ui/menubar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
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

        <div className="flex flex-col justify-items-center items-center"> 

          <Tabs defaultValue="works" className="w-screen pt-[5lvh]">
            <TabsList className="grid w-fit grid-cols-2 self-center justify-center">
              <TabsTrigger value="about">WORKS</TabsTrigger>
              <TabsTrigger value="works">ABOUT</TabsTrigger>
            </TabsList>
            <TabsContent value="about">
            </TabsContent>
            <TabsContent value="works">
            </TabsContent>
          </Tabs>

          <p className="text-xl pt-[8lvh] pb-[12lvh]"> WORKS </p> 

          <div className="columns-1 sm:columns-2 lg:columns-3 space-y-[2lvh] gap-4 w-4xl">
            <Card className="h-50"></Card>
            <Card className="h-70"></Card>
            <Card className="h-100"></Card>
            <Card className="h-90"></Card>
            <Card className="h-80"></Card>
            <Card className="h-90"></Card>
            <Card className="h-65"></Card>
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
