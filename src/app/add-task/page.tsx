"use client";
import React, { useState, useEffect } from "react";
import axios from "@/components/api";
import { useRouter } from "next/navigation";
import Form from "@/components/taskform";
import { taskDef } from "@/components/types";
import Spinner from "@/components/Spinner";
import Navbar from "@/components/Navbar";

export default function AddTask() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const save = async (task: taskDef) => {
    setLoading(true);
    const res = await axios.post("/tasks", [task]);

    setLoading(false);
    router.push("/");
  };

  useEffect(() => {
    document.title = "Add Task";
  }, []);
  return (
    <main>
      <Navbar title="Add Task" backBtn={true} />
      {loading ? <Spinner /> : <Form submitBtnLabel="ADD" onSave={save} />}
    </main>
  );
}
