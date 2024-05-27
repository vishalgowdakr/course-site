import { selector, atom } from 'recoil';
import { type Lesson } from './lessons';

const fetchLessons = async (): Promise<Lesson[]> => {
	const response = await fetch('/api/lessons', { method: 'GET' });
	if (!response.ok) {
		throw new Error('Failed to fetch lessons');
	}
	const data: Lesson[] = await response.json() as Lesson[];
	return data;
};

export interface LessonData {
	lessons: Lesson[];
	lessonsSize: number[];
	currentChapterIndex: {
		lesson: number;
		chapter: number;
	};
}

export const lessonsSelector = selector<Lesson[]>({
	key: 'lessonsSelector',
	get: async () => {
		try {
			const lessons = await fetchLessons();
			return lessons;
		} catch (error) {
			console.error(error);
			return []; // Return an empty array in case of an error
		}
	},
});

export const lessonAtom = atom<LessonData>({
	key: 'lessonAtom',
	default: {
		lessons: [],
		lessonsSize: [],
		currentChapterIndex: {
			lesson: 0,
			chapter: 0
		},
	}
});
