import { FeedbackType } from "@/utils/types";
import mongoose, { Schema } from "mongoose";

const FeedbackSchema: Schema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    staffId: {
      type: Schema.Types.ObjectId,
      ref: "Staffs",
      required: true,
    },
    rating: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<FeedbackType>("feedback", FeedbackSchema);
