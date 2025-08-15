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