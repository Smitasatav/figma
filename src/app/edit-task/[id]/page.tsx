"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Form from "@/components/TaskForm";
import { taskDef } from "@/components/types";
import { useParams } from "next/navigation";
import Spinner from "@/components/Spinner";
import axios from "@/components/api";

export default function EditTask() {
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState<taskDef>({ title: "", detail: "" });
  const router = useRouter();

  let { id } = useParams();

  let fetchData = async () => {
    setLoading(true);
    let res = await axios.get(`/tasks/${id}`);
    setTask(res.data);
    setLoading(false);
  };

  let save = async (task: taskDef) => {
    setLoading(true);
    await axios.put(`/tasks/${id}`, task);
    setLoading(false);
    router.push("/");
  };

  useEffect(() => {
    document.title = "Edit Data";
    fetchData();
  }, [id]);
  return (
    <main>
      <Navbar title="Edit Task" backBtn={true} />
      {loading ? (
        <Spinner />
      ) : (
        <Form submitBtnLabel="UPDATE" onSave={save} task={task} />
      )}
    </main>
  );
}
