import genreSchema from "@/schemas/genreSchema";
import mongoose from "mongoose";

const Genre = mongoose.model("Genre", genreSchema);

export default Genre;