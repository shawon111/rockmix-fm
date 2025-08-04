import channelSchema from "@/schemas/channelSchema";
import mongoose from "mongoose";

const Channel = mongoose.model("Channel", channelSchema);

export default Channel;