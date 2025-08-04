import albumSchema from "@/schemas/albumSchema";
import mongoose from "mongoose";
const Album = mongoose.model('Album', albumSchema);

export default Album;