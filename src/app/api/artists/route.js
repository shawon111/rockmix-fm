import { connectDB } from "@/configs/database";
import { getSkipValue, limitValue } from "@/lib/helperValues";
import Artist from "@/models/artistModel";
import { NextResponse } from "next/server";

export const GET = async (req) => {
	const { searchParams } = new URL(req.url);
	const page = parseInt(searchParams.get("page") || "1", 10);
	const skipValue = getSkipValue(page);
	try {
		await connectDB();
		const artists = await Artist.find({}).sort({ created_at: -1 }).skip(skipValue).limit(limitValue);
		return NextResponse.json({ success: true, data: artists }, { status: 200 });
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
			spotify_id,
			spotify_followers,
			spotify_popularity,
			image_small,
			image_large,
			fully_scraped,
			auto_update,
			verified,
			views,
			plays,
			user,
		} = body || {};

		if (!name) {
			return NextResponse.json({ success: false, message: "'name' is required" }, { status: 400 });
		}

		const artist = await Artist.create({
			name,
			spotify_id,
			spotify_followers,
			spotify_popularity,
			image_small,
			image_large,
			fully_scraped,
			auto_update,
			verified,
			views,
			plays,
			user,
		});
		return NextResponse.json({ success: true, data: artist }, { status: 201 });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ success: false, message: err.message }, { status: 500 });
	}
}; 