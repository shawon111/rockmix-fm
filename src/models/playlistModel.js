import playlistSchema from "@/schemas/playlistSchema";
import mongoose from "mongoose";

const Playlist = mongoose.model('Playlist', playlistSchema);

export default Playlist;