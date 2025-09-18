import { connectDB } from "@/configs/database";
import { getSkipValue, limitValue } from "@/lib/helperValues";
import Genre from "@/models/genreModel";
import { NextResponse } from "next/server";

export const GET = async (req) => {
	const { searchParams } = new URL(req.url);
	const page = parseInt(searchParams.get("page") || "1", 10);
	const skipValue = getSkipValue(page);
	try {
		await connectDB();
		const genres = await Genre.find({}).sort({ created_at: -1 }).skip(skipValue).limit(limitValue);
		return NextResponse.json({ success: true, data: genres }, { status: 200 });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ success: false, message: err.message }, { status: 500 });
	}
};

export const POST = async (req) => {
	try {
		await connectDB();
		const body = await req.json();
		const { name, display_name, image, popularity } = body || {};
		if (!name || !display_name) {
			return NextResponse.json({ success: false, message: "'name' and 'display_name' are required" }, { status: 400 });
		}
		const genre = await Genre.create({ name, display_name, image, popularity });
		return NextResponse.json({ success: true, data: genre }, { status: 201 });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ success: false, message: err.message }, { status: 500 });
	}
}; 