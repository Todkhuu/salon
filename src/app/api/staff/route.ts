import { NextRequest, NextResponse } from "next/server";
import { StaffModel } from "@/server/models";
import { connectMongoDb } from "@/server/db/db";

connectMongoDb();

export async function GET(req: NextRequest) {
  try {
    const staff = await StaffModel.find();
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

    const newStaff = await StaffModel.create(staffData);
    // console.log("✅ Created staff:", newStaff);

    return NextResponse.json(
      { message: "Successfully created staff", data: newStaff },
      { status: 201 }
    );
  } catch (err) {
    console.log("error", err);
    return NextResponse.json(
      { message: "error in staff", err },
      { status: 500 }
    );
  }
}
