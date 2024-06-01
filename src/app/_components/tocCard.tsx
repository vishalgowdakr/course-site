'use client'

import { useRecoilState } from "recoil";
import { type Lesson } from "../_data/lessons";
import Link from "next/link";
import { currentChapterAtom } from "../_data/globalState";

interface TocCardProps {
  lesson: Lesson;
  index: number
}

export default function TocCard(props: TocCardProps) {
  const [chapterState, setChapterState] = useRecoilState(currentChapterAtom)
  const { lesson, index } = props;
  return (
    <div className="w-1/2 bg-white flex mt-8 shadow-md h-[220px] shadow-gray-400" id="card">
      <div className="flex-[0.6] bg-[#FF6767] font-bold  w-1/3" id="card-logo">
        <div className=" top-2 mt-2 ml-2">{index + 1}</div>
        <div className="relative m-12">
          <svg className="w-full h-full relative bottom-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-info" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"></path></svg>
        </div>
      </div>
      <div className="flex-col p-8 w-2/3" id="propss">
        <h2 className="text-xl mb-1 font-bold">{lesson.name}</h2>
        <div className="flex-col">
          {lesson.chapters.map((chapter, idx) => (
            <div key={chapter.name}>
              <Link href={`/chapters`} onClick={() => { setChapterState({ lesson: index, chapter: idx }); console.log("Hello"); console.log(chapterState) }} className="p-8">
                {`${idx + 1}. ${chapter.name}`}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div>
        {
          /*
                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 154 154"><defs><clipPath id="clip-path"><rect id="Rectangle_2238" data-name="Rectangle 2238" width="154" height="154" transform="translate(9467 350)" fill="#fff" stroke="#707070" stroke-width="1"></rect></clipPath><clipPath id="clip-corner-image-active"><rect width="154" height="154"></rect></clipPath></defs><g id="corner-image-active" clip-path="url(#clip-corner-image-active)"><g id="Corner-image-active-2" data-name="Corner-image-active" transform="translate(-9467 -350)" clip-path="url(#clip-path)"><path id="Subtraction_34" data-name="Subtraction 34" d="M-3857.365,1740.766h0l-7.07-7.07,12.89-12.89v14.142l-5.818,5.818Zm-14.142-14.142h0l-7.071-7.07,27.033-27.033v14.143l-19.96,19.96Zm-14.143-14.143h0l-7.07-7.069,41.175-41.175v14.142Zm-14.142-14.142h0l-7.07-7.069,55.317-55.317v14.142Zm-14.142-14.142h0l-7.07-7.069,69.459-69.459v14.142Zm-14.142-14.142h0l-7.07-7.069,76.739-76.739h6.862v7.28Zm-14.143-14.143h0l-7.07-7.069,62.6-62.6h14.142Zm-14.142-14.142h0l-7.07-7.069,48.454-48.454h14.142Zm-14.142-14.142h0l-7.07-7.069,34.312-34.312h14.142Zm-14.142-14.142h0l-7.07-7.069,20.17-20.17h14.142Zm-14.142-14.142h0l-7.071-7.071,6.027-6.027h14.144l-13.1,13.1Zm367.24-56.114v-.909l.455.455-.453.453Z" transform="translate(13472.546 -1236.766)" fill="var(--corner-fill)"></path></g></g></svg>
           */
        }
      </div>
    </div >
  );
}
