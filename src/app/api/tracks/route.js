import { connectDB } from "@/configs/database";
import Track from "@/models/trackModel"
import { NextResponse } from "next/server"

// get tracks by pagination
export const GET = async(req) =>{
    try{
        await connectDB();
        const tracks = await Track.find({});
        return NextResponse.json({success: true, data: tracks}, {status: 200})
    }
    catch(err){
        console.log(err)
        return NextResponse.json({success:false, mesage: err.message}, {status: 500})
    }
}