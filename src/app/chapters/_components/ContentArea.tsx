"use client";

import { lessonAtom } from "~/app/_data/globalState";
import { Button } from "../../../components/ui/button";
import LessonContent from "./LessonContent";
import { useRecoilState } from "recoil";
import { useCallback, useEffect, useState } from "react";
import { initializeLessonData } from "~/app/_data/globalState";

export default function ContentArea() {
  const [lessonData, setLessonData] = useRecoilState(lessonAtom);
  const [loading, setLoading] = useState(true);

  const fetchLesson = useCallback(() => {
    console.log(loading);
    if (loading !== false) {
      initializeLessonData(setLessonData)
        .then(() => setLoading(loading => !loading))
        .catch(console.error)
    }
  }, [setLessonData, loading]);

  useEffect(() => {
    fetchLesson();
  }, [fetchLesson]);

  const currentChapterIndex = lessonData.currentChapterIndex;
  const isAtFirstLesson = currentChapterIndex.lesson === 0 && currentChapterIndex.chapter === 0;
  const isAtLastLesson = currentChapterIndex.lesson === (lessonData?.lessonSize?.length || 0) - 1
    && currentChapterIndex.chapter === ((lessonData?.lessonSize?.[currentChapterIndex.lesson] ?? 1) - 1);

  const goToPreviousChapter = () => {
    setLessonData((prevLessonData) => {
      const copyLData = { ...prevLessonData };
      if (currentChapterIndex.chapter !== 0) {
        copyLData.currentChapterIndex = {
          ...currentChapterIndex,
          chapter: currentChapterIndex.chapter - 1,
        };
      } else if (currentChapterIndex.lesson > 0) {
        const previousLesson = currentChapterIndex.lesson - 1;
        const previousChapter = (lessonData?.lessonSize?.[previousLesson] ?? 1) - 1;
        copyLData.currentChapterIndex = {
          lesson: previousLesson,
          chapter: previousChapter,
        };
      }
      return copyLData;
    });
  };

  const goToNextChapter = () => {
    setLessonData((prevLessonData) => {
      const copyLData = { ...prevLessonData };
      const isAtEndOfALesson = currentChapterIndex.chapter === (copyLData.lessonSize?.[currentChapterIndex.lesson] ?? 1) - 1;
      if (!isAtEndOfALesson) {
        copyLData.currentChapterIndex = {
          ...currentChapterIndex,
          chapter: currentChapterIndex.chapter + 1,
        };
      } else if (currentChapterIndex.lesson < (copyLData.lessonSize?.length || 0) - 1) {
        copyLData.currentChapterIndex = {
          lesson: currentChapterIndex.lesson + 1,
          chapter: 0,
        };
      }
      return copyLData;
    });
  };

  const path = lessonData?.lessons?.[currentChapterIndex.lesson]?.chapters?.[currentChapterIndex.chapter]?.path;

  return (
    <div className="w-3/4 flex-col bg-white p-16 m-4 shadow shadow-gray-200">
      {loading === true ? (
        <p>Loading...</p>
      ) : (
        <>
          {console.log(path)}
          <LessonContent uri={path ?? ''} />
          <div className="flex justify-between">
            {!isAtFirstLesson && (
              <Button onClick={goToPreviousChapter}>
                &lt;--- Previous
              </Button>
            )}
            {!isAtLastLesson && (
              <Button onClick={goToNextChapter}>
                Next ---&gt;
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
