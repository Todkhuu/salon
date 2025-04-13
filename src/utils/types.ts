import { Schema } from "mongoose";

export interface StaffType {
  name: string;
  experience: number;
  bio?: string;
  rating?: number;
  image?: string;
  services: string[];
  workDays: string[];
  workHours: {
    start: string;
    end: string;
    breakTime: {
      start: string;
      end: string;
    };
  };
}

export interface ServiceType {
  name: string;
  price: number;
  duration: number;
  description?: string;
}

export interface AppointmentType {
  customerName: string;
  phoneNumber: string;
  staffId: Schema.Types.ObjectId;
  service: string;
  date: string;
  time: string;
  status?: "pending" | "confirmed" | "cancelled";
  paid?: boolean;
}

export interface FeedbackType {
  staffId: Schema.Types.ObjectId;
  customerName: string;
  rating: number;
  createdAt?: Date;
}
