import { NextResponse } from "next/server";
import connectMongoose from "../../../libs/mongoDB";
import Topic from "../../../models/topic";
connectMongoose();
export async function POST(req) {
  const { title, description } = await req.json();
  await Topic.create({ title, description });
  return NextResponse.json({ message: "topic created" }, { status: 201 });
}

export async function GET() {
  const topics = await Topic.find({});
  return NextResponse.json({ topics });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "topic deleted" }, { status: 200 });
}
