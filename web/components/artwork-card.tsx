/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jvOgkyh3xyN
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Info, X } from "lucide-react"
import PurchaseInfoTooltip from "./purchase-info-dialog"
import { Dialog, DialogClose, DialogContent, DialogOverlay, DialogTrigger } from "@radix-ui/react-dialog"
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';


type ArtworkCardProps = {
    title: string
    year: string
    price: string | undefined
    path: string
}

export default function ArtworkCard({ title, year, price, path }: ArtworkCardProps) {
  return (
    <Dialog>
            <DialogOverlay className="fixed h-screen inset-0 z-10 bg-black/55 backdrop-blur-xl" />

    <div className="pt-2.75 pb-2.75 relative mb-8 break-inside-avoid ease-in-out transition transform duration-150 hover:-translate-y-0.5">
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-150 hover:shadow-xl dark:bg-gray-950">

        <DialogTrigger asChild>
        <img
          src={path}
          alt="Product Image"
          className="w-full h-auto object-cover transition duration-75 hover:brightness-107"
        />
        </DialogTrigger>

        <div className="pl-3 pr-3 pt-1.5 pb-2.5 space-y-0.75">
          <p className="text-sm font-medium">{title}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{year}</p>
          {price && (
          <div className="flex items-center justify-between">
            <span className="text-sm hover:text-emerald-900">${price}</span>
            <Button variant={"ghost"}><PurchaseInfoTooltip></PurchaseInfoTooltip></Button>
          </div>
          )}
        </div>
      </div>
    </div>
    </div>

    <DialogContent className="fixed inset-0 z-50 flex items-center justify-center p-10 transition-all duration-150 animate-in fade-in-0 zoom-in-95">
        <TransformWrapper
          initialScale={1}
          minScale={0.5}
          maxScale={4}
          wheel={{ step: 0.1 }}
          doubleClick={{ disabled: false }}
          pinch={{ disabled: false }}
          panning={{ disabled: false }}
        >
        <TransformComponent>

    {/* <div className="fixed inset-0 z-50 flex items-center justify-center p-10 transition-all duration-150 animate-in fade-in-0 zoom-in-95"> */}
         <img src={path} alt={`Full size of ${title}`} className=" h-[90vh] w-auto max-w-full object-contain rounded-md brightness-105 shadow-[0px_0px_120px_rgba(0,0,0,.68)]"></img> 
         </TransformComponent> 
        </TransformWrapper>
        
         <DialogClose asChild>
        <button className="absolute top-10 right-5 text-white size-20"><X /></button>
        </DialogClose>
    {/* </div> */}
    </DialogContent>
    </Dialog>
  )
}