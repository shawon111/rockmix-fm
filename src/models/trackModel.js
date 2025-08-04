import trackSchema from "@/schemas/trackSchema";
import mongoose from "mongoose";

const Track = mongoose.model("Track", trackSchema);

export default Track;