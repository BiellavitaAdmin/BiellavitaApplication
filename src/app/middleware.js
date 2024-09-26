// middleware.js
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req) {
  // Get the token from cookies
  const token = req.cookies.get("token");

  // If no token is found, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    // Verify the token using your secret
    jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    // If token is invalid, redirect to login
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // If everything is good, continue to the requested page
  return NextResponse.next();
}

// Apply this middleware to the following pages only
export const config = {
  matcher: ["/partnership", "/privateevents", "/projects"], // Protected routes
};
