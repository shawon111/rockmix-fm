import artistSchema from "@/schemas/artistSchema";
import mongoose from "mongoose";

const Artist = mongoose.models.Artist || mongoose.model('Artist', artistSchema);

export default Artist;