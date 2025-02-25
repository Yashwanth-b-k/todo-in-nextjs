"use client";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure you want to remove");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });
    }
    if (res.ok) {
      router.push("/");
    }
  };
  return (
    <button>
      <HiOutlineTrash
        onClick={removeTopic}
        size={24}
        className="text-red-400"
      />
    </button>
  );
}
