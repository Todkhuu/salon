import { ServiceType } from "@/utils/types";
import mongoose, { Schema } from "mongoose";

const ServiceSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true },
  description: { type: String },
});

export default mongoose.model<ServiceType>("service", ServiceSchema);
