import { FeedbackType } from "@/utils/types";
import mongoose, { Schema } from "mongoose";

const FeedbackSchema: Schema = new Schema({
  staffId: { type: Schema.Types.ObjectId, ref: "staff", required: true },
  customerName: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<FeedbackType>("feedback", FeedbackSchema);
