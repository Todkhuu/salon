import { AppointmentType } from "@/utils/types";
import mongoose, { model, Model, models, Schema } from "mongoose";
import { AppointmentStatusEnum, ServiceEnum } from "../constants";

const AppointmentSchema: Schema = new Schema<AppointmentType>(
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
    date: { type: Date, required: true },
    status: {
      type: String,
      enum: Object.values(AppointmentStatusEnum),
      default: AppointmentStatusEnum.PENDING,
      required: true,
    },
    paid: { type: Boolean, required: true },
    service: {
      type: String,
      enum: Object.values(ServiceEnum),
      required: true,
    },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

export const AppointmentModel: Model<AppointmentType> =
  models["Appointment"] ||
  model<AppointmentType>("Appointment", AppointmentSchema);

// export default mongoose.model<AppointmentType>(
//   "Appointment",
//   AppointmentSchema
// );
