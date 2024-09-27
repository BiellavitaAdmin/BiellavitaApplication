import { NextResponse } from "next/server";

export function middleware(req) {
  const res = NextResponse.next();

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.headers.append("Access-Control-Allow-Credentials", "true");
    res.headers.append("Access-Control-Allow-Origin", "*"); // replace this with your actual origin if necessary
    res.headers.append(
      "Access-Control-Allow-Methods",
      "GET, DELETE, PATCH, POST, PUT"
    );
    res.headers.append(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );
    return res;
  }

  // For other requests
  res.headers.append("Access-Control-Allow-Credentials", "true");
  res.headers.append("Access-Control-Allow-Origin", "*"); // replace this with your actual origin if necessary
  res.headers.append(
    "Access-Control-Allow-Methods",
    "GET, DELETE, PATCH, POST, PUT"
  );
  res.headers.append(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  return res;
}

// Specify the path regex to apply the middleware to
export const config = {
  matcher: "/api/:path*",
};
