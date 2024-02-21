"use client";
import React, { useState, useEffect } from "react";
import Form from "@/components/Form";
import axios from "@/components/api";
import { taskDef } from "@/components/types";
import Spinner from "@/components/Spinner";
import { useRouter } from "next/navigation";

export default function AddTask() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const save = async (user: taskDef) => {
    setLoading(true);
    const res = await axios.post("/users", [user]);
    console.log(user);
    setLoading(false);
    router.push("/");
  };

  useEffect(() => {
    document.title = "Add task";
  }, []);

  return (
    <main>
      <Form submitBtnLable="ADD" action="ADD USER" onSave={save} />
    </main>
  );
}
