"use client"

import { lessonAtom } from "~/app/_data/globalState";
import { Button } from "../../../components/ui/button";
import LessonContent from "./LessonContent";
import { useRecoilState } from "recoil";

export default function ContentArea() {
  const [lessonData, setLessonData] = useRecoilState(lessonAtom);

  const currentChapterIndex = lessonData?.currentChapterIndex || {};

  const isAtFirstLesson = currentChapterIndex.lesson === 0 && currentChapterIndex.chapter === 0;
  const isAtLastLesson = currentChapterIndex.lesson === lessonData?.lessonsSize?.length - 1 && currentChapterIndex.chapter === lessonData?.lessonsSize[currentChapterIndex.lesson];

  const goToPreviousChapter = () => {
    setLessonData(() => {
      const copyLData = lessonData;
      if (currentChapterIndex.chapter !== 0) {
        currentChapterIndex.chapter--;
        copyLData.currentChapterIndex = currentChapterIndex;
      } else {
        currentChapterIndex.lesson--;
        const value = lessonData.lessonsSize[currentChapterIndex.lesson]
        currentChapterIndex.chapter = value ?? 0
        copyLData.currentChapterIndex = currentChapterIndex;
      }
      return copyLData;
    });
  };

  const goToNextChapter = () => {
    setLessonData(() => {
      const copyLData = lessonData;
      const isAtEndOfALesson = currentChapterIndex.chapter === copyLData.lessonsSize[currentChapterIndex.lesson] ?? 1 - 1
      if (!isAtEndOfALesson) {
        currentChapterIndex.lesson++
        copyLData.currentChapterIndex = currentChapterIndex;
      }
      else {
        currentChapterIndex.lesson++;
        currentChapterIndex.chapter = 0;
        copyLData.currentChapterIndex = currentChapterIndex;
      }
      return copyLData;
    });
  }

  const path = lessonData?.lessons?.[currentChapterIndex.lesson]?.chapters?.[currentChapterIndex.chapter]?.path;
  const uri = path

  return (
    <div className="w-3/4 flex-col bg-white p-16 m-4 shadow shadow-gray-200">
      <LessonContent uri={uri ?? ''} />
      <div className="flex justify-between">
        {!isAtFirstLesson && (
          <Button onClick={goToPreviousChapter}>
            &lt;--- Previous
          </Button>
        )}
        {!isAtLastLesson && (
          <Button onClick={() => { goToNextChapter }}>
            Next ---&gt;
          </Button>
        )}
      </div>
    </div>
  );
}
