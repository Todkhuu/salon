import { FeedbackType } from "@/utils/types";
import mongoose, { model, Model, models, Schema } from "mongoose";

const FeedbackSchema: Schema = new Schema<FeedbackType>(
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

export const FeedbackModel: Model<FeedbackType> =
  models["Feedback"] || model<FeedbackType>("Feedback", FeedbackSchema);
// export default mongoose.model<FeedbackType>("feedback", FeedbackSchema);
