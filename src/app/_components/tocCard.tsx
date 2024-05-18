'use client'

import { type Lesson } from "../_data/lessons";
import Link from "next/link";

interface TocCardProps {
  lesson: Lesson;
}

export default function TocCard(props: TocCardProps) {
  const { lesson } = props;

  return (
    <div className="w-2/4 bg-white flex mt-8 shadow-md shadow-gray-400" id="card">
      <div className="h-48 flex-[0.7] bg-[#FF6767] font-bold p-4" id="card-logo">
        {lesson.name}
        <svg className="w-full h-full relative bottom-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-info" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"></path></svg>
      </div>
      <div className="flex-col p-8 w-2/3" id="propss">
        <h2 className="text-xl mb-1 font-bold">{lesson.name}</h2>
        {lesson.chapters.map((chapter) => (
          <Link key={chapter.name} href={`/chapters`}>
            <div className="justify-between mx-4">{chapter.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
