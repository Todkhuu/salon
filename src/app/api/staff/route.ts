import { NextRequest, NextResponse } from "next/server";
import staffModel from "@/be/models/staff.model";
import { connectMongoDb } from "@/be/db/db";

connectMongoDb();

export async function GET(req: NextRequest) {
  try {
    const staff = await staffModel.find();
    return NextResponse.json({ message: "All staffs", data: staff });
  } catch (err) {
    return NextResponse.json(
      { message: "error in staff", err },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const staffData = await req.json();
    // console.log("💡 POST received data:", staffData);

    const newStaff = await staffModel.create(staffData);
    // console.log("✅ Created staff:", newStaff);

    return NextResponse.json(
      { message: "Successfully created staff", data: newStaff },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "error in staff", err },
      { status: 500 }
    );
  }
}
