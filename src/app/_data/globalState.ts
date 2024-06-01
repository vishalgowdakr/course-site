import { atom } from 'recoil';
import { type Lesson } from './lessons';

const fetchLessons = async (): Promise<Lesson[]> => {
	const response = await fetch('/api/lessons', { method: 'GET' });
	if (!response.ok) {
		throw new Error('Failed to fetch lessons');
	}
	const data: Lesson[] = await response.json() as Lesson[];
	return data;
};

export interface LessonProps {
	lessons: Lesson[],
	lessonSize: number[]
}

export type CurrentChapter = {
	lesson: number,
	chapter: number
}

const initialLessonData: LessonProps = {
	lessons: [] as Lesson[],
	lessonSize: [],
};

const initialChapterInfo: CurrentChapter = {
	lesson: 0,
	chapter: 0
}

export const currentChapterAtom = atom({
	key: 'currentChapterAtom',
	default: initialChapterInfo,
})

export const lessonAtom = atom({
	key: 'lessonAtom',
	default: initialLessonData,
});

export const initializeLessonData = async (setLessonData: (data: LessonProps) => void) => {
	try {
		const lessons = await fetchLessons();
		const lessonSize = lessons.map((obj) => obj.chapters.length)
		const updatedLessonData: LessonProps = {
			lessons: lessons,
			lessonSize: lessonSize
		};
		setLessonData(updatedLessonData);
	} catch (error) {
		console.error(error);
	}
};
