import { connectDB } from "@/configs/database";
import { getSkipValue, limitValue } from "@/lib/helperValues";
import Album from "@/models/albumModel";
import { NextResponse } from "next/server";

export const GET = async (req) => {
	const { searchParams } = new URL(req.url);
	const page = parseInt(searchParams.get("page") || "1", 10);
	const skipValue = getSkipValue(page);
	try {
		await connectDB();
		const albums = await Album.find({}).sort({ created_at: -1 }).skip(skipValue).limit(limitValue);
		return NextResponse.json({ success: true, data: albums }, { status: 200 });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ success: false, message: err.message }, { status: 500 });
	}
};

export const POST = async (req) => {
	try {
		await connectDB();
		const body = await req.json();
		const {
			name,
			release_date,
			image,
			description,
			spotify_id,
			spotify_popularity,
			fully_scraped,
			auto_update,
			temp_id,
			views,
			plays,
			owner_id,
		} = body || {};

		if (!name || !owner_id) {
			return NextResponse.json({ success: false, message: "'name' and 'owner_id' are required" }, { status: 400 });
		}

		const album = await Album.create({
			name,
			release_date: release_date ? new Date(release_date) : undefined,
			image,
			description,
			spotify_id,
			spotify_popularity,
			fully_scraped,
			auto_update,
			temp_id,
			views,
			plays,
			owner_id,
		});
		return NextResponse.json({ success: true, data: album }, { status: 201 });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ success: false, message: err.message }, { status: 500 });
	}
}; 