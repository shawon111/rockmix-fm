import genreSchema from "@/schemas/genreSchema";
import mongoose from "mongoose";

const Genre = mongoose.models.Genre || mongoose.model("Genre", genreSchema);

export default Genre;