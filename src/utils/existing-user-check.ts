import { UserModel } from "../server/models";

export const isExistingUser = async (email: string) => {
  return await UserModel.findOne({ email });
};
