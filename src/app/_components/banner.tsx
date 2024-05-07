
export default function Banner() {
  return (
    <div className="lg: h-72  flex">
      <div className={"flex-[1.45] flex justify-end bg-[#FAAD80] sm:text-5xl lg:px-32 lg:pt-4 sm:px-4 sm:pt-4"}>
        <div className="flex-col  lg:p-12">
          <div className=" text-right lg:text-6xl">A long course Title</div>
          <div className="text-right text-xl mt-4">a short course description</div>
          <div className="flex justify-end mt-6">
            <div className="size-12 bg-gray-200 text-sm rounded-3xl p-1">          <svg className="w-full h-full" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-info" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"></path></svg>
            </div>
            <div className="ml-4">
              <div className="text-xl">Author name</div>
              <div className="text-sm">Author designation</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-[#FF6767] flex justify-center items-center">
        <div className="size-36 bg-gray-200 p-3">
          <svg className="w-full h-full" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-info" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"></path></svg>
        </div>
      </div>
    </div>
  )
}
