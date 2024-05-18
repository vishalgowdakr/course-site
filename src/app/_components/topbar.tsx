"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RecoilRoot } from "recoil";

export default function Topbar() {
  const pathname = usePathname();
  return (
    <RecoilRoot>
      <nav className="h-16 border flex justify-between bg-white shadow-lg shadow-gray-400">
        <Link href="/">
          <div className="font-bold text-xl flex-initial m-4 ml-4">Course Title</div>
        </Link>
        {pathname === '/' ?
          <button className="bg-[#FF6767] m-3 p-1 rounded-md font-bold"><div>Kata machine</div></button> :
          <div className="flex-initial m-4 mr-12">
            current lesson
          </div>}
      </nav>
    </RecoilRoot>
  )
}
