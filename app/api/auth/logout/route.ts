export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { deleteSession } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const token = request.headers
      .get("cookie")
      ?.match(/session=([^;]+)/)?.[1];

    if (token) {
      await deleteSession(token);
    }

    const response = NextResponse.json({ message: "Logged out successfully" });

    // ✅ Clear cookie
    response.cookies.set({
      name: "session",
      value: "",
      maxAge: 0,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
