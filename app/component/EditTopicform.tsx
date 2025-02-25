"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicform({ id, title, description }) {
  const router = useRouter();
  const [t, sT] = useState(title);
  const [d, sD] = useState(description);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newTitle: t, newDescription: d }),
      })
      if (!res.ok) {
        throw new Error("Failed to update topic");
      }
      router.push("/");
      
    } catch (error) {
      console.log(err);
      
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          onChange={(e) => sT(e.target.value)}
          value={t}
          className="border border-slate-500 px-8 py-2"
          placeholder="topic title"
        />
        <input
          onChange={(e) => sD(e.target.value)}
          value={d}
          type="text"
          className="border border-slate-500 px-8 py-2"
          placeholder="topic description"
        />
        <button type="submit" className="bg-green-600 text-white py-3 px-6 w-fit">
          Update topic
        </button>
      </form>
    </div>
  );
}
