import { NextResponse } from "next/server";
import connectMongoose from "../../../../libs/mongoDB";
import Topic from "../../../../models/topic";
await connectMongoose();

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json(
    {
      message: "Topic updated successfully",
    },
    { status: 200 }
  );
}

export async function GET(req, { params }) {
  const { id } = params;
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}
