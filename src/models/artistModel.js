import artistSchema from "@/schemas/artistSchema";
import mongoose from "mongoose";

const Artist =mongoose.model('Artist', artistSchema)

export default Artist;