import { promises as fs } from 'fs'
import { type NextRequest, NextResponse } from "next/server";
import getLessonsObj from "../../_data/lessons";
import path from 'path'

export async function GET() {
	try {
		const lessonsObj = await getLessonsObj();
		const lessons = lessonsObj.lessons;
		return NextResponse.json(lessons);
	} catch (error) {
		console.error(error);
		return NextResponse.error()
	}
}

export async function POST(request: NextRequest) {
	try {
		const searchParams = request.nextUrl.searchParams;
		const chapter = searchParams.get('chapter');
		console.log(chapter);
		if (!chapter) {
			return NextResponse.json({ error: 'Chapter parameter is missing' }, { status: 400 });
		}

		const filePath = path.resolve(chapter);
		console.log(filePath)
		const content = await fs.readFile(filePath, 'utf8');

		return NextResponse.json({ data: content });
	} catch (error) {
		console.error('Error reading file:', error);
		return NextResponse.json({ error: 'Error reading file' }, { status: 500 });
	}
}
