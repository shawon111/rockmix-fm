import billingPlanSchema from "@/schemas/billingPlanSchema";
import mongoose from "mongoose";

const BillingPlan = mongoose.model("BillingPlan", billingPlanSchema);

export default BillingPlan;