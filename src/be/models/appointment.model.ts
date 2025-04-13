import { AppointmentType } from "@/utils/types";
import mongoose, { Schema } from "mongoose";

const AppointmentSchema: Schema = new Schema(
  {
    customerName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    staffId: { type: Schema.Types.ObjectId, ref: "staff", required: true },
    service: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
    paid: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<AppointmentType>(
  "appointment",
  AppointmentSchema
);
