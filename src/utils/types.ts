import {
  AppointmentStatusEnum,
  CategoryEnum,
  ServiceEnum,
  StaffRoleEnum,
} from "@/server/constants";
import { Schema } from "mongoose";

export interface StaffType {
  _id: Schema.Types.ObjectId;
  email: string;
  password: string;
  role: StaffRoleEnum;
  name: string;
  experience: number;
  about: string;
  rating: number;
  image: string;
  category: CategoryEnum;
  availableTimes: Date[];
  createdAt: Date;
  updatedAt: Date;
}

export interface UserType {
  _id: Schema.Types.ObjectId;
  email: string;
  password: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AppointmentType {
  _id: Schema.Types.ObjectId;
  userId: UserType;
  staffId: StaffType;
  date: Date;
  status: AppointmentStatusEnum;
  paid: boolean;
  service: ServiceEnum;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface FeedbackType {
  _id: Schema.Types.ObjectId;
  userId: UserType;
  staffId: StaffType;
  rating: number;
  createdAt?: Date;
}
