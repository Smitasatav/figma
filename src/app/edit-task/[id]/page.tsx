"use client";
import React from "react";
import Navbar from "@/components/navbar";
import "./edit.css";
import Form from "@/components/taskform";
import { taskDef } from "@/components/types";
import { getTaskFromLocal, saveTasksToLocal } from "@/components";

export default function EditTask() {
  let save = (task: taskDef) => {
    let tasks = [];
    if (localStorage.tasks) {
      tasks = getTaskFromLocal();
    }
    let i = 1;
    tasks[i].title = task.title;
    tasks[i].detail = task.detail;
    saveTasksToLocal(tasks);
  };
  return (
    <main>
      <Navbar title="Edit Task" backBtn={true} />
      <Form
        submitBtnLabel="UPDATE"
        onSave={save}
        task={{ title: "hii", detail: "smita" }}
      />
    </main>
  );
}
