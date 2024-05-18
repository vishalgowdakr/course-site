import * as fs from 'fs';

export interface Lesson {
	name: string;
	chapters: { name: string; path: string }[];
}

export interface ListProps {
	lessons: Lesson[];
}

async function readFirstLine(filePath: string): Promise<string> {
	try {
		const data = await fs.promises.readFile(filePath, 'utf-8');
		if (typeof data === 'string') {
			return data
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
		const files = await readFiles(dir + unit);
		const chapters = await Promise.all(files
			.map(async (file) => {
				return ({
					name: await readFirstLine(dir + unit + '/' + file).then((line) => (line.replace("# ", ""))),
					path: dir + unit + '/' + file,
				});
			}));
		const lesson: Lesson = {
			name: unit,
			chapters: chapters,
		};
		return lesson;
	}));
	return fullLessons;
};

const directory = '/home/vishalgowdakr/personal/web/course-site/src/app/_data/mdfiles/';

export default async function getLessonsObj(): Promise<ListProps> {
	const lessonsWithChapters = await constructChapterObject(directory);
	const lessonsObj: ListProps = { lessons: lessonsWithChapters };
	return lessonsObj;
}
