import { StaffType } from "@/utils/types";
import mongoose, { Schema } from "mongoose";

const StaffSchema: Schema = new Schema({
  name: { type: String, required: true },
  experience: { type: Number, required: true },
  bio: { type: String },
  rating: { type: Number, default: 0 },
  image: { type: String },
  services: [{ type: String }],
  workDays: [{ type: String }], // eg: ["Monday", "Tuesday"]
  workHours: {
    start: { type: String },
    end: { type: String },
    breakTime: {
      start: { type: String },
      end: { type: String },
    },
  },
});

export default mongoose.models.staff ||
  mongoose.model<StaffType>("staff", StaffSchema);
