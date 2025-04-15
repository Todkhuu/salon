import { connectMongoDb } from "@/server/db/db";
import { UserModel } from "@/server/models";
import { hashPassword, isExistingUser } from "@/utils";
import { NextRequest, NextResponse } from "next/server";

connectMongoDb();

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    console.log("💡 POST received data:", email, password);

    if (!email) {
      return NextResponse.json(
        { message: "Email is required." },
        { status: 400 }
      );
    }

    const existingUser = await isExistingUser(email);

    if (existingUser) {
      return NextResponse.json(
        { message: "User is already registered." },
        { status: 409 }
      );
    }

    const hashedPassword = hashPassword(password);
    console.log("✅ Created hashedPassword:", hashedPassword);

    // const { _id: userId } = await UserModel.create({
    //   email,
    //   password: hashedPassword,
    // });

    // const accessToken = createToken({ userId });

    const newStaff = await UserModel.create({
      email,
      password: hashedPassword,
    });
    console.log("✅ Created newStaff:", newStaff);

    return NextResponse.json(
      { message: "User successfully registered.", data: newStaff },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error during signup:", error);

    return NextResponse.json(
      {
        message: "Internal Server Error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
