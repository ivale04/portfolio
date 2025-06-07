// components/layout.tsx
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useRouter } from "next/router";
import { Mail } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const current = router.pathname;

  const tabClass = (path: string) =>
    `block py-2 hover:bg-stone-50 ${
      current === path ? "font-bold border-b-2 border-black" : ""
    }`;

  return (
    <div className="sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <nav className="drop-shadow-md pt-[2lvh] fixed z-10 bg-white top-0 left-0 w-full text-center">
        <ul className="grid w-full grid-cols-4 pr-[10lvw] pl-[10lvw]">
          <li><Link href="/" className={tabClass("/")}>ALL WORKS</Link></li>
          <li><Link href="/for-sale" className={tabClass("/for-sale")}>FOR SALE</Link></li>
          <li><Link href="/about" className={tabClass("/about")}>ABOUT</Link></li>
          <li>
            <Link href="/contact" className={tabClass("/contact")}>
              CONTACT <Mail className="inline-block w-4 h-4 ml-1" />
            </Link>
          </li>
        </ul>
      </nav>

      <main className="pt-[14lvh] px-4">{children}</main>
    </div>
  );
}
