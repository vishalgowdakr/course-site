import * as fs from 'fs';
import * as path from 'path';

export interface Lesson {
	name: string;
	chapters: { name: string; path: string }[];
}

export interface ListProps {
	lessons: Lesson[];
	lessonsSize: number[];
}

async function readFirstLine(filePath: string): Promise<string> {
	try {
		const data = await fs.promises.readFile(filePath, 'utf-8');
		if (typeof data === 'string') {
			return data;
		} else {
			throw new Error('Unexpected data type encountered.');
		}
	} catch (error) {
		console.error('Error reading file:', error);
		return Promise.reject(error);
	}
}

async function readDirectories(directoryPath: string): Promise<string[]> {
	return new Promise((resolve, reject) => {
		fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
			if (err) {
				reject(`Error reading directory: ${err.message}`);
			} else {
				const directories = files
					.filter(file => file.isDirectory())
					.map(dir => dir.name);
				resolve(directories);
			}
		});
	});
}

async function readFiles(directoryPath: string): Promise<string[]> {
	return new Promise((resolve, reject) => {
		fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
			if (err) {
				reject(`Error reading directory: ${err.message}`);
			} else {
				const fileNames = files
					.filter(file => file.isFile())
					.map(file => file.name);
				resolve(fileNames);
			}
		});
	});
}

const constructChapterObject = async (dir: string): Promise<Lesson[]> => {
	const lessons = await readDirectories(dir);
	const fullLessons = await Promise.all(lessons.map(async (unit) => {
		const unitPath = path.join(dir, unit);
		const files = await readFiles(unitPath);
		const chapters = await Promise.all(files.map(async (file) => {
			const filePath = path.join(unitPath, file);
			const name = await readFirstLine(filePath).then((line) => line.replace("# ", ""));
			return {
				name: name,
				path: filePath,
			};
		}));
		const lesson: Lesson = {
			name: unit,
			chapters: chapters,
		};
		return lesson;
	}));
	return fullLessons;
};

const directory = path.join(process.cwd(), 'public', 'mdfiles')

export default async function getLessonsObj(): Promise<ListProps> {
	const lessonsWithChapters = await constructChapterObject(directory);
	const lessonsObj: ListProps = {
		lessons: lessonsWithChapters,
		lessonsSize: lessonsWithChapters.map(lesson => lesson.chapters.length),
	};
	return lessonsObj;
}
