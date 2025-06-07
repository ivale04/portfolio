import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Info, Mail, Instagram, List } from "lucide-react";

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function PurchaseInfoDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="w-5 h-5">
          <Info  />
        </Button>
      </DialogTrigger>

      <DialogContent className={`${geistSans.className} ${geistMono.className} font-[family-name:var(--font-geist-sans)] pb-10`}>
        <DialogHeader>
          <DialogTitle className={`flex justify-center ${geistSans.className} ${geistMono.className} font-[family-name:var(--font-geist-sans)]`}>email or DM to purchase</DialogTitle>

            <div className="flex justify-center gap-4 py-4 font-sans">
          <a href="mailto:ivone.alexander.art@gmail.com">
            <Button size="lg" variant="secondary">
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </Button>
          </a>
          <a href="https://instagram.com/ivone.alexander.art" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="secondary">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Button>
          </a>
        </div>

          <DialogDescription className={`flex justify-center ${geistSans.className}`}>  
            <p className="font-sans">In your message, please include:
              <div className="pt-3 pb-3 font-semibold font-sans w-auto">
              <li>the title of the piece you're interested in</li>  
              <li>where you're located</li>
              </div>
              Thank you! :)
              </p>
            </DialogDescription> 
        </DialogHeader>

        
      </DialogContent>
    </Dialog>
  );
}
