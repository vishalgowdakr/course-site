"use client";

import { currentChapterAtom, lessonAtom, initializeLessonData, type CurrentChapter } from "~/app/_data/globalState";
import { Button } from "../../../components/ui/button";
import LessonContent from "./LessonContent";
import { useRecoilState } from "recoil";
import { useCallback, useEffect, useState } from "react";

export default function ContentArea() {
  const [lessonData, setLessonData] = useRecoilState(lessonAtom);
  const [loading, setLoading] = useState(true);
  const [chapter, setChapter] = useRecoilState(currentChapterAtom);

  console.log(chapter)
  const fetchLesson = useCallback(async () => {
    if (loading) {
      try {
        await initializeLessonData(setLessonData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
  }, [loading, setLessonData]);

  useEffect(() => {
    fetchLesson().catch(console.error);
  }, [fetchLesson]);

  const currentChapterIndex = chapter;
  const isAtFirstLesson = currentChapterIndex.lesson === 0 && currentChapterIndex.chapter === 0;
  const isAtLastLesson = currentChapterIndex.lesson === (lessonData?.lessonSize?.length || 0) - 1
    && currentChapterIndex.chapter === ((lessonData?.lessonSize?.[currentChapterIndex.lesson] ?? 1) - 1);

  const goToPreviousChapter = () => {
    function getPreviousChapter(prevChapter: CurrentChapter) {
      if (currentChapterIndex.chapter !== 0) {
        return { ...currentChapterIndex, chapter: currentChapterIndex.chapter - 1 };
      } else if (currentChapterIndex.lesson > 0) {
        const previousLesson = currentChapterIndex.lesson - 1;
        const previousChapter = (lessonData?.lessonSize?.[previousLesson] ?? 1) - 1;
        return { lesson: previousLesson, chapter: previousChapter };
      }
      return prevChapter;
    }
    const previousChapter = getPreviousChapter(chapter)
    setChapter(previousChapter)
    console.log(chapter)
  };

  const goToNextChapter = () => {
    function getNextChapter(prevChapter: CurrentChapter) {
      const isAtEndOfALesson = currentChapterIndex.chapter === (lessonData?.lessonSize?.[currentChapterIndex.lesson] ?? 1) - 1;
      if (!isAtEndOfALesson) {
        return { ...currentChapterIndex, chapter: currentChapterIndex.chapter + 1 };
      } else if (currentChapterIndex.lesson < (lessonData?.lessonSize?.length || 0) - 1) {
        return { lesson: currentChapterIndex.lesson + 1, chapter: 0 };
      }
      return prevChapter;
    };
    const nextChapter = getNextChapter(chapter)
    setChapter(nextChapter)
    console.log(chapter)
  };

  const path = lessonData?.lessons?.[currentChapterIndex.lesson]?.chapters?.[currentChapterIndex.chapter]?.path;

  return (
    <div className="w-3/4 flex-col bg-white p-16 m-4 shadow shadow-gray-200">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <LessonContent uri={path ?? ''} />
          <div className="flex justify-between">
            {isAtFirstLesson ? (
              <Button onClick={goToPreviousChapter} disabled={true}>
                &lt;--- Previous
              </Button>
            ) : (
              <Button onClick={goToPreviousChapter}>
                &lt;--- Previous
              </Button>
            )
            }
            {isAtLastLesson ? (
              <Button onClick={goToNextChapter} disabled={true}>
                Next ---&gt;
              </Button>
            ) : (
              <Button onClick={goToNextChapter}>
                Next ---&gt;
              </Button>
            )
            }
          </div>
        </div>
      )}
    </div>
  );
}
