import subscriptionSchema from "@/schemas/subscriptionSchema";
import mongoose from "mongoose";

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;