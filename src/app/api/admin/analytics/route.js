import { connectDB } from "@/configs/database";
import Artist from "@/models/artistModel";
import Album from "@/models/albumModel";
import Track from "@/models/trackModel";
import Genre from "@/models/genreModel";
import { NextResponse } from "next/server";

export const GET = async () => {
	try {
		await connectDB();
		const [artists, albums, tracks, genres] = await Promise.all([
			Artist.countDocuments({}),
			Album.countDocuments({}),
			Track.countDocuments({}),
			Genre.countDocuments({}),
		]);
		return NextResponse.json({ success: true, data: { artists, albums, tracks, genres } }, { status: 200 });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ success: false, message: err.message }, { status: 500 });
	}
}; 