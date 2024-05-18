'use client'

import TocCard from "./tocCard";
import { type Lesson } from "../_data/lessons";
import { RecoilRoot } from "recoil";

interface TocProps {
  lessons: Lesson[];
}

const Toc = ({ lessons }: TocProps) => {

  return (
    <RecoilRoot>
      <div className="flex flex-col justify-center items-center">
        <div className="w-1/2">
          <h1 className="text-3xl mt-8">Table of contents</h1>
        </div>
        {lessons && lessons.length > 0 ? (
          lessons.map((lesson: Lesson) => (
            <TocCard key={lesson.name} lesson={lesson} />
          ))
        ) : (
          <p>No lessons available</p>
        )}
      </div>
    </RecoilRoot>
  );
}
export default Toc;
