import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { Cinzel } from "next/font/google"


const cinzel = Cinzel({
  subsets: ['latin'], // Specify the subsets you want to use
  weight: ['400', '900'], // Specify the weights you want to use
});

export default function Banner() {

  return (
    <div>
      <div className="h-16 bg-white"></div>
      <div className="lg: h-72 shadow shadow-gray-400 flex">
        <div className={"flex-[1.45] flex justify-end bg-[#FAAD80] sm:text-5xl lg:px-32 lg:pt-4 sm:px-4 sm:pt-4"}>
          <div className="flex-col  lg:p-12">
            <div className={cinzel.className + " text-right lg:text-5xl"}>Docker Alchemy</div>
            <div className="text-right text-xl mt-4">turning code into scalable containers</div>
            <div className="flex justify-end mt-6">
              <Avatar className="size-14">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <div className="text-xl font-bold">Vishal</div>
                <div className="text-sm">Average linux user</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-[#FF6767] flex justify-center items-center">
          <div className="">
            <Image width={216} height={216} alt="a course logo for Docker Alchemy" src="https://utfs.io/f/c371e270-9246-4b27-967f-a8a200c6083c-lxr74w.webp" />
          </div>
        </div>
      </div>
    </div>
  )
}
