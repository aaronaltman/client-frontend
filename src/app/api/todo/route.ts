import { NextResponse } from "next/server";

export function POST() {
  return NextResponse.redirect(
    "http://127.0.0.1:8000/api/todo/todos/?format=json"
  );
}
export function GET() {
  return NextResponse.redirect("/api/todo");
}
export function PUT() {
  return NextResponse.redirect("/api/todo");
}
export function DELETE() {
  return NextResponse.redirect("/api/todo");
}
