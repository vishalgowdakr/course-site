"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RecoilRoot } from "recoil";

export default function Topbar() {
  const pathname = usePathname();
  const course = 'Docker Alchemy'
  return (
    <RecoilRoot>
      <nav className="h-16 w-full border flex justify-between bg-white fixed ">
        <Link href="/">
          <div className="font-bold text-xl flex-initial m-4 ml-4">{course.toUpperCase()}</div>
        </Link>
        {pathname === '/' ?
          <button className="bg-[#FF6767] m-4 mr-4 p-1 rounded-md"><div>Click me</div></button> :
          <div className="flex-initial m-4 mr-12">
            current lesson
          </div>}
      </nav>
    </RecoilRoot>
  )
}
