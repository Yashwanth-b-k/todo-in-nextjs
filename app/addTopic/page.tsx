"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title && !desc) {
      alert("Please fill both fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: title, description: desc }),
      });
      if (res.ok) {
        router.push("/");
      }
    } catch (error: any) {
      throw new Error("An error occurred " + error.message);
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        onChange={(e: any) => setTitle(e.target.value)}
        type="text"
        name="title"
        className="border border-slate-500 px-8 py-2"
        placeholder="Topic title"
      />
      <input
        onChange={(e: any) => setDesc(e.target.value)}
        type="text"
        className="border border-slate-500 px-8 py-2"
        placeholder="Topic Desc"
      />
      <button type="submit" className="bg-green-600 text-white py-3 px-6 w-fit">
        Add topic
      </button>
    </form>
  );
}
