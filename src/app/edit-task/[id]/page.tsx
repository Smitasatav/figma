"use client";
import React from "react";
import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Form from "@/components/taskform";
import { taskDef } from "@/components/types";
import { getTaskFromLocal, saveTasksToLocal } from "@/components";
import { useParams } from "next/navigation";

export default function EditTask() {
  const [task, setTask] = useState<taskDef>({ title: "", detail: "" });
  const [tasks, setTasks] = useState<taskDef[]>([]);

  let { id } = useParams();
  id = parseInt(id);

  let save = (task: taskDef) => {
    tasks[id].title = task.title;
    tasks[id].detail = task.detail;
    saveTasksToLocal(tasks);
  };
  useEffect(() => {
    if (localStorage.tasks) {
      let tasks2 = getTaskFromLocal();
      setTasks(tasks2);
      setTask(tasks2[id]);
    }
  }, [id]);
  return (
    <main>
      <Navbar title="Edit Task" backBtn={true} />
      <Form submitBtnLabel="UPDATE" onSave={save} task={task} />
    </main>
  );
}
