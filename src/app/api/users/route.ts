import { NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/userSchema";

export async function GET() {
  try {
    await dbConnect();

    const allUsers = await User.find({},  { fullName: 1, _id: 0 });

    if (allUsers.length === 0) {
      return NextResponse.json(
        { message: "No users found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Users fetched successfully", data: allUsers },
      { status: 200 }
    );
  } catch (error) {
    console.error("🔥 API ERROR:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
