import { NextResponse } from "next/server";
import getLessonsObj from "../../_data/lessons";

export async function GET() {
	try {
		const lessonsObj = await getLessonsObj();
		const lessons = lessonsObj.lessons;
		console.log(lessons)
		return NextResponse.json(lessons);
	} catch (error) {
		console.error(error);
		return NextResponse.error()
	}
}
