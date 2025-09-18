import { connectDB } from "@/configs/database";
import { getSkipValue, limitValue } from "@/lib/helperValues";
import Track from "@/models/trackModel"
import { NextResponse } from "next/server"

// get tracks by pagination
export const GET = async(req) =>{
	const { searchParams } = new URL(req.url)
	const page = parseInt(searchParams.get("page") || "1", 10);
	const skipValue = getSkipValue(page)
	try{
		await connectDB();
		const tracks = await Track.find({}).skip(skipValue).limit(limitValue);
		return NextResponse.json({success: true, data: tracks}, {status: 200})
	}
	catch(err){
		console.log(err)
		return NextResponse.json({success:false, mesage: err.message}, {status: 500})
	}
}

export const POST = async (req) => {
	try {
		await connectDB();
		const body = await req.json();
		const {
			name,
			album_name,
			number,
			duration,
			youtube_id,
			spotify_id,
			spotify_popularity,
			url,
			image,
			description,
			plays,
			auto_update,
			temp_id,
			owner_id,
			album,
			artists,
			genres,
		} = body || {};

		if (!name || !owner_id) {
			return NextResponse.json({ success: false, message: "'name' and 'owner_id' are required" }, { status: 400 });
		}

		const track = await Track.create({
			name,
			album_name,
			number,
			duration,
			youtube_id,
			spotify_id,
			spotify_popularity,
			url,
			image,
			description,
			plays,
			auto_update,
			temp_id,
			owner_id,
			album,
			artists,
			genres,
		});
		return NextResponse.json({ success: true, data: track }, { status: 201 });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ success: false, message: err.message }, { status: 500 });
	}
};