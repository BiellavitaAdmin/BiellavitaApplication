import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req) {
  const token =
    req.cookies.get("token") ||
    req.headers.authorization?.split(" ")[1] ||
    localStorage.getItem("token");

  if (!token) {
    // If no token, redirect to login
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    // Verify JWT token
    jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    // If token is invalid, redirect to login
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

// Apply this middleware to the following pages only
export const config = {
  matcher: ["/partnership", "/privateevents", "/projects"], // Add your protected routes here
};
