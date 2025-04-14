import { UserType } from "@/utils/types";
import { model, Model, models, Schema } from "mongoose";

const UserSchema: Schema = new Schema<UserType>(
  {
    email: { type: String, unique: true },
    password: { type: String, required: true, select: false },
    phoneNumber: { type: String, required: true },
  },
  { timestamps: true }
);

export const UserModel: Model<UserType> =
  models["Users"] || model<UserType>("Users", UserSchema);
