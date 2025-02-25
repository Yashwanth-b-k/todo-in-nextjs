import EditTopicform from "@/app/component/EditTopicform";
import React from "react";

const getTopicById = async (id: any) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Could not fetch topic");
    }
    return res.json();
  } catch (err) {
    console.error(err);
    return null; // or throw an error or redirect to error page
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;
  return (
    <div>
      <EditTopicform id={id} title={title} description={description}/>
    </div>
  );
}
