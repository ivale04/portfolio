// pages/about.tsx
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
          <p className="text-xl font-light italic pt-[8lvh] pb-[8lvh]"> about </p> 
        <Separator className="bg-stone-200"/> 

        <div className="flex flex-col pt-8 pl-[8vh] pr-[8vh] items-center self-center justify-center place-content-center">

            <img className="pb-[5lvh] lg:max-w-0 w-sm rounded-xs" src="/images/me.JPG"></img>

            <div className="pb-[19lvh] flex justify-evenly self-center items-center text-left">
            <div className="lg:w-[40%]">
            <p className={geistSans.className}> Ivone Alexander began her artistic studies at a young age, recieving her first lessons through 
            an after-school art program at her elementary school. She would go on to study under 
            Anne Kiefaber and Todd Carignan over the years that followed. Today, she attends UNC-Chapel Hill,
            pursuing a double major in Computer Science and Studio Art. <br></br>
            <br></br>
            
            "I think of myself as somewhat of an 'artist of all trades.' I started out with oils, and they'll 
            always feel like comfort food to me (as much as a medium can). But over the years I have spent a good deal of time 
            exploring ceramics, charcoal, and working digitally as well. I feel like this is readily apparent in the 
            sheer variety of commissions I've created for my clients. Among these are digital tattoo designs, 
            digital paintings in the style of the covers of Tui Sutherland's Wings of Fire book series, and pet portraits (both digital and oil).
            When I was younger, I went through an intense polymer-clay phase, by the end of which everyone in my life 
            ended up with at least one little clay dragon. Last year I was really into beaded jewelry. 
            <br></br><br></br>

            Nowadays I've decided to return to oil painting, in a very intentional way. 
            I've gained a lot of experience in other media over the past few years, and I'm excited 
            to see how that has developed my artistic tastes and style when it comes to oil. 
            <br></br><br></br>
            
            In the current state of  "  
            </p> 
            </div>

            <img className="h-auto max-w-0 lg:max-w-[27%] rounded-xs" src="/images/me.JPG"></img>
            </div>

            <div className="flex flex-row space-x-2 justify-center pb-[10lvw]">
            <img className="max-w-0 sm:max-w-0 pb-[1lvh] lg:max-w-[40.5%]" src="/images/painting outside 3.jpg"></img>
            <img className="max-w-0 sm:max-w-0 lg:max-w-[45%]" src="/images/painting outside 1.jpg"></img>
            </div>

            <img className="max-w-md  pb-[1lvh] lg:max-w-0" src="/images/painting outside 3.jpg"></img>
            <img className="max-w-md  lg:max-w-0" src="/images/painting outside 1.jpg"></img>
        </div>
          
        </div>
    </div>

    </Layout>
    </div>
  );
}
